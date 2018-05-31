import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SlidePanelComponent } from './slide-panel/slide-panel.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: SlidePanelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
