import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-kokoro-main-left',
  templateUrl: './kokoro-main-left.component.html',
  styleUrls: ['./kokoro-main-left.component.css']
})
export class KokoroMainLeftComponent implements OnInit {
  @Input() allSongs;
  /*@Output()
  outputData  = new EventEmitter();*/
  constructor() { }

  ngOnInit() {
    this.allSongs = this.allSongs;
    console.log(this.allSongs);
  }
}
