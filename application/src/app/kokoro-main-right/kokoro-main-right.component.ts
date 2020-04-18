import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CANCIONES } from '../canciones/canciones';
import { Subject } from 'rxjs';
import { RouteStateServiceService } from '../service/route-state.service';
import { map } from 'rxjs/operators';
import { takeUntil } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-kokoro-main-right',
    templateUrl: './kokoro-main-right.component.html',
    styleUrls: ['./kokoro-main-right.component.css']
})

export class KokoroMainRightComponent implements OnInit, OnDestroy {

    private destroy = new Subject<void>();
    pathParam: Observable<number>;
    canciones = CANCIONES;

    constructor(private route: ActivatedRoute, private routeStateService: RouteStateServiceService) {}

    ngOnInit() {
        setTimeout(() => {
            this.route.paramMap
                .pipe(
                    map(paramMap => paramMap.get('id')),
                    takeUntil(this.destroy)
                )
                .subscribe(routePathParam => this.routeStateService.updatePathParamState(routePathParam));
        });
        this.pathParam = this.routeStateService.pathParam;
    }

    ngOnDestroy(){
        this.destroy.next();
        this.destroy.complete();
        this.routeStateService.updatePathParamState(null);
    }
}