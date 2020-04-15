import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CANCIONES } from '../canciones/canciones';

@Component({
    selector: 'app-kokoro-main-right',
    templateUrl: './kokoro-main-right.component.html',
    styleUrls: ['./kokoro-main-right.component.css']
})
export class KokoroMainRightComponent implements OnInit {
    canciones = CANCIONES;
    public selectedSongId;
    
    product_id: string;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.selectedSongId = +params.get('id') - 1;
        }); 
    }
}