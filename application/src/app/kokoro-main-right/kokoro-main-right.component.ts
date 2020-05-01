import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { RouteStateServiceService } from '../service/route-state.service';
import { map } from 'rxjs/operators';
import { takeUntil } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GetDataSongsService } from '../service/get-data-songs.service';
import { Cancion } from '../canciones/cancion';

@Component({
    selector: 'app-kokoro-main-right',
    templateUrl: './kokoro-main-right.component.html',
    styleUrls: ['./kokoro-main-right.component.css']
})

export class KokoroMainRightComponent implements OnInit, OnDestroy {
    private destroy = new Subject<void>();
    songs = null;
    getAllValuesSongs;
    pathParam: Observable<string>;
    indexSelected;
    inputValuesEdit = {
        artista: false,
        album:false,
        fecha:false,
        generoMusical:false,
        informacion:false
    }
    inputValueArtist= "";
    inputValueAlbum = "";
    inputValueFecha = "";
    inputValueGenero = "";
    inputValueInfo = "";

    constructor(private route: ActivatedRoute, private routeStateService: RouteStateServiceService,private dataSongsService: GetDataSongsService) {}

    ngOnInit() {
        setTimeout(() => {
            this.route.paramMap .pipe(
                    map(paramMap => 
                        this.indexSelected = paramMap.get('id')
                    ),takeUntil(this.destroy)
                )
                .subscribe(routePathParam => this.routeStateService.updatePathParamState(routePathParam));
        });
        this.pathParam = this.routeStateService.pathParam;
        this.dataSongsService.getSongs().subscribe(data => {
            this.getAllValuesSongs = data.map(e => {
                let data;
                data = e.payload.doc.data();
                return {
                    id: data.id,
                    nombreCancion: data.nombreCancion,
                    nombreGrupo: data.nombreGrupo,
                    nombreAlbum: data.nombreAlbum,
                    fechaCancion: data.fechaCancion,
                    urlFotoAlbum: data.urlFotoAlbum,
                    generoMusical: data.generoMusical,
                    duracionCancion: data.duracionCancion,
                    urlArtista: data.urlArtista,
                    detalleArtista: data.detalleArtista,
                    urlCancion: data.urlCancion,
                } as Cancion;
            })
            this.songs = this.getAllValuesSongs.sort(this.dynamicSort("id"));
        });
    }

    ngOnDestroy(){
        this.destroy.next();
        this.destroy.complete();
        this.routeStateService.updatePathParamState(null);
    }

    editInput(param){
        switch(param){
            case 0: this.inputValuesEdit.artista = !this.inputValuesEdit.artista; break
            case 1: this.inputValuesEdit.album = !this.inputValuesEdit.album; break
            case 2: this.inputValuesEdit.fecha = !this.inputValuesEdit.fecha; break
            case 3: this.inputValuesEdit.generoMusical = !this.inputValuesEdit.generoMusical; break
            case 4: this.inputValuesEdit.informacion = !this.inputValuesEdit.informacion; break
        }
    }

    focusoutArtista(refVar){
        this.inputValueArtist = refVar.target.value;
    }

    focusoutAlbum(refVar){
        this.inputValueAlbum = refVar.target.value;
    }

    focusoutFecha(refVar){
        this.inputValueFecha = refVar.target.value;
    }

    focusoutGenero(refVar){
        this.inputValueGenero = refVar.target.value;
    }

    focusoutInfo(refVar){
        this.inputValueInfo = refVar.target.value;
    }

    updateSong(fieldSelected) {
        let allSongs : Cancion;
        allSongs = this.songs;
        let songSelected = allSongs[this.indexSelected-1];

        switch(fieldSelected){
            case 0: songSelected.nombreGrupo = this.inputValueArtist; break
            case 1: songSelected.nombreAlbum = this.inputValueAlbum; break
            case 2: songSelected.fechaCancion= this.inputValueFecha; break
            case 3: songSelected.generoMusical = this.inputValueGenero; break
            case 4: songSelected.detalleArtista = this.inputValueInfo; break
        }
        
        this.dataSongsService.updateSong(songSelected);
        this.editInput(fieldSelected);
    }

    /**
     * Function to sort alphabetically an array of objects by some specific key.
     * 
     * @param {String} property Key of the object to sort.
    */
    dynamicSort(property) {
        var sortOrder = 1;

        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }

        return function (a, b) {
            if (sortOrder == -1) {
                return b[property].localeCompare(a[property]);
            } else {
                return a[property].localeCompare(b[property]);
            }
        }
    }
}