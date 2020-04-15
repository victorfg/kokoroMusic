import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { KokoroMainRightComponent } from './kokoro-main-right/kokoro-main-right.component';

const routes: Routes = [
    {path: 'songSelected/:id', component: KokoroMainRightComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {}