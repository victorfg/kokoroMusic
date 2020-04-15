import { Component } from '@angular/core';
import { CANCIONES } from './canciones/canciones';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  canciones = CANCIONES;

  constructor() {}

  ngOnInit(){}
}