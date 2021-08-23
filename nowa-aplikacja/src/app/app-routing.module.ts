import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DwaComponent } from './dwa/dwa.component';
import { JedenComponent } from './jeden/jeden.component';

const routes: Routes = [
  { path: 'jeden', component: JedenComponent },
  { path: 'dwa/:tak', component: DwaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
