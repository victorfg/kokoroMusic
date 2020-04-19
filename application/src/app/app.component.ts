import { Component } from '@angular/core';
import { CANCIONES } from './canciones/canciones';
import { RouteStateServiceService } from './service/route-state.service';
import { Observable } from 'rxjs';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    canciones = CANCIONES;
    pathParam: Observable<string>;
    constructor(private routeStateService: RouteStateServiceService) { }

    ngOnInit() {
        this.pathParam = this.routeStateService.pathParam;
    }
}