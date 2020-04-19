import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'app-kokoro-searcher',
    templateUrl: './kokoro-searcher.component.html',
    styleUrls: ['./kokoro-searcher.component.css']
})
export class KokoroSearcherComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        this.search.valueChanges
        .pipe(
            debounceTime(300)
        )
        .subscribe(value => this.searchEmitter.emit(value));
    }
    search = new FormControl('');

    @Output('search') searchEmitter = new EventEmitter<string>();
}