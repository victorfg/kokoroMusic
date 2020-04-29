import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { KokoroHeaderComponent } from './kokoro-header/kokoro-header.component';
import { KokoroMainLeftComponent } from './kokoro-main-left/kokoro-main-left.component';
import { KokoroMainRightComponent } from './kokoro-main-right/kokoro-main-right.component';
import { KokoroFooterComponent } from './kokoro-footer/kokoro-footer.component';
import { KokoroMainLeftSongListComponent } from './kokoro-main-left-song-list/kokoro-main-left-song-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { KokoroSearcherComponent } from './kokoro-searcher/kokoro-searcher.component';
import { SearchPipe } from './pipes/search.pipe';

/* Firebase */

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

/* Angular Material */

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';
import { MatIconModule } from "@angular/material/icon";

@NgModule({
    declarations: [
        AppComponent,
        KokoroHeaderComponent,
        KokoroMainLeftComponent,
        KokoroMainRightComponent,
        KokoroFooterComponent,
        KokoroMainLeftSongListComponent,
        KokoroSearcherComponent,
        SearchPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        FormsModule,
        MatSliderModule,
        MatIconModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireDatabaseModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
