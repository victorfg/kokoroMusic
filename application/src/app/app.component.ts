import { Component } from '@angular/core';
import { GetDataSongsService } from './service/get-data-songs.service';
import { Observable } from 'rxjs';
import { Cancion } from './canciones/cancion';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    orderAllSongsById;
    getAllValuesSongs;

    pathParam: Observable<string>;
    constructor(private dataSongsService: GetDataSongsService) { }

    ngOnInit() {
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
            this.orderAllSongsById = this.getAllValuesSongs.sort(this.dynamicSort("id"));
        });
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