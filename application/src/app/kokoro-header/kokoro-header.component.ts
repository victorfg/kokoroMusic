import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kokoro-header',
  templateUrl: './kokoro-header.component.html',
  styleUrls: ['./kokoro-header.component.css']
})
export class KokoroHeaderComponent implements OnInit {
  title = 'kokoroMusic';
  constructor() { }

  ngOnInit(): void {
  }

}
