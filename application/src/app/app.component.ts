import { Component } from '@angular/core';
import { RouteStateServiceService } from './service/route-state.service';
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
    constructor(private routeStateService: RouteStateServiceService, private dataSongsService: GetDataSongsService) { }

    ngOnInit() {
        this.pathParam = this.routeStateService.pathParam;
        this.getAllSongs = this.dataSongsService.getSongs();
    }
}