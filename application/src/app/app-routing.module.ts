import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {KokoroHeaderComponent} from './kokoro-header/kokoro-header.component';

const routes: Routes = [
    //{path: 'caca', component: KokoroHeaderComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {}