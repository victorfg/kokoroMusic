import { Injectable } from '@angular/core';
import { Cancion } from '../canciones/cancion';
import { CANCIONES } from '../canciones/canciones';

@Injectable({
  providedIn: 'root'
})
export class GetDataSongsService {

  constructor() { }

  getSongs():Cancion[]{
      return CANCIONES;
  }
}