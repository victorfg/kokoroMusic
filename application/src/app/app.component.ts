import { Component } from '@angular/core';
import { GetDataSongsService } from './service/get-data-songs.service';
import { Observable } from 'rxjs';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    getAllSongs = [];
    pathParam: Observable<string>;
    constructor(private dataSongsService: GetDataSongsService) { }

    ngOnInit() {
        this.getAllSongs = this.dataSongsService.getSongs();
    }
}