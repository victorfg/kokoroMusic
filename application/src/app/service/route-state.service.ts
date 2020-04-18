import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RouteStateServiceService {

    private pathParamState = new BehaviorSubject<number>(0);

    pathParam: Observable<number>;

    constructor() {
        this.pathParam = this.pathParamState.asObservable();
    }
    
    updatePathParamState(newPathParam: number) {
        newPathParam --;
        this.pathParamState.next(newPathParam);
    }
}
