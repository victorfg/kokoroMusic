import { Component, OnInit } from '@angular/core';
import { Cancion } from '../canciones/cancion';
import { CANCIONES } from '../canciones/canciones';

@Component({
  selector: 'app-kokoro-main-left-song-list',
  templateUrl: './kokoro-main-left-song-list.component.html',
  styleUrls: ['./kokoro-main-left-song-list.component.css']
})
export class KokoroMainLeftSongListComponent implements OnInit {

  canciones = CANCIONES;
  //@Output
  constructor() { }

  ngOnInit(): void {
  }

}
