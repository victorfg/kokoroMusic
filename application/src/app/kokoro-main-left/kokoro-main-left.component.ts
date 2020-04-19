import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-kokoro-main-left',
    templateUrl: './kokoro-main-left.component.html',
    styleUrls: ['./kokoro-main-left.component.css']
})
export class KokoroMainLeftComponent implements OnInit {
    @Input() allSongs;
    filtro_valor = '';

    constructor() { }

    ngOnInit() {
        this.allSongs = this.allSongs;
    }

    handleSearch(value:string){
        this.filtro_valor = value;
    }
}
