import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cancion } from '../canciones/cancion';
//import { CANCIONES } from '../canciones/canciones';

@Component({
    selector: 'app-kokoro-main-left-song-list',
    templateUrl: './kokoro-main-left-song-list.component.html',
    styleUrls: ['./kokoro-main-left-song-list.component.css']
})
export class KokoroMainLeftSongListComponent implements OnInit {

    songSelected:Cancion;

    @Input() allSongs;

    //@Output() selectedSong = new EventEmitter<Cancion>();

    constructor() { }

    ngOnInit() {
    }
}