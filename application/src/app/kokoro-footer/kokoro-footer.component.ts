import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RouteStateServiceService } from '../service/route-state.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-kokoro-footer',
    templateUrl: './kokoro-footer.component.html',
    styleUrls: ['./kokoro-footer.component.css']
})
export class KokoroFooterComponent implements OnInit {
    pathParam: Observable<number>;
    constructor(private routeStateService: RouteStateServiceService) { }

    ngOnInit() {
        this.pathParam = this.routeStateService.pathParam;
    }
}