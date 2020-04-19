import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RouteStateServiceService {

    private pathParamState = new BehaviorSubject<string>(null);

    pathParam: Observable<string>;

    constructor() {
        this.pathParam = this.pathParamState.asObservable();
    }

    public getMyObs(){
        return this.pathParamState.asObservable()
    }
    
    updatePathParamState(newPathParam: string) {
        let numberPathParam = +newPathParam;
        numberPathParam --;
        let finalValue = numberPathParam.toString();
        this.pathParamState.next(finalValue);
    }
}
