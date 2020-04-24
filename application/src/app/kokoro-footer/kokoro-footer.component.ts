import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RouteStateServiceService } from '../service/route-state.service';
import { Observable } from 'rxjs';
import * as moment from 'moment';

@Component({
    selector: 'app-kokoro-footer',
    templateUrl: './kokoro-footer.component.html',
    styleUrls: ['./kokoro-footer.component.css']
})
export class KokoroFooterComponent implements OnInit {
    @Input() allSongs;

    audioObj = new Audio();
    audioEvents = [
        "ended",
        "error",
        "play",
        "playing",
        "pause",
        "timeupdate",
        "canplay",
        "loadedmetadata",
        "loadstart"
    ];
    currentTimeCalcul = '00:00:00';
    durationCalcul = '00:00:00';
    duration: number;
    currentTime:number;
    seek = 0;  
    selectedSong: string;
    canciones = [];
    pathParam: Observable<number>;
    constructor(private routeStateService: RouteStateServiceService) { }

    ngOnInit() {
        this.canciones = this.allSongs;
        this.routeStateService.getMyObs().subscribe(data => {
            this.selectedSong = data;
            if (data != null){
                this.streamObserver(this.canciones[this.selectedSong].urlCancion).subscribe(event=>{});
            }
        })
    }

    play(){
        this.audioObj.play();
    }

    pause(){
        this.audioObj.pause();
    }

    stop(){
        this.audioObj.pause(),
        this.audioObj.currentTime = 0;
    }

    setVolume(ev){
        this.audioObj.volume = ev.value;
    }

    setSeekTo(ev){
        this.audioObj.currentTime = ev.value;
    }

    streamObserver(url){
        return new Observable(observer => {
            this.audioObj.src = url;
            this.audioObj.load();
            this.audioObj.play();

            const handler = (event:Event) =>{
                this.seek = this.audioObj.currentTime;
                this.durationCalcul = this.timeFormat(this.audioObj.duration);
                this.currentTimeCalcul = this.timeFormat(this.audioObj.currentTime);
                this.duration = this.audioObj.duration;
                this.currentTime = this.audioObj.currentTime;
            }

            this.addEvent(this.audioObj, this.audioEvents, handler);

            return () =>{
                this.audioObj.pause();
                this.audioObj.currentTime = 0;
                this.removeEvent(this.audioObj,this.audioEvents,handler);
            }
        });
    }

    timeFormat(time,format="HH:mm:ss"){
        const momentTime = time * 1000;
        return moment.utc(momentTime).format(format);
    }

    addEvent(obj, events, handler) {
        events.forEach(event => {
            obj.addEventListener(event,handler);
        });
    }

    removeEvent(obj,events,handler){
        events.forEach(event => {
            obj.removeEventListener(event,handler);
        });
    }
}