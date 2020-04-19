import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Cancion } from '../canciones/cancion';

@Component({
    selector: 'app-kokoro-main-left-song-list',
    templateUrl: './kokoro-main-left-song-list.component.html',
    styleUrls: ['./kokoro-main-left-song-list.component.css']
})
export class KokoroMainLeftSongListComponent implements OnInit {

    songSelected:Cancion;

    @Input() allSongs;
    @Input() filtro_valor;

    constructor(private router: Router) { }

    ngOnInit() {}

    clickSongItem(selectedSong){
        this.router.navigate(['/songSelected',selectedSong.id]);
    }
}