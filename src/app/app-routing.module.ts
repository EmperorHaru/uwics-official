import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ExecsComponent} from './execs/execs.component';
import {AboutPageComponent} from './about-page/about-page.component';
import {EventsPageComponent} from './events-page/events-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'execs', pathMatch: 'full', component: ExecsComponent },
  { path: 'about', pathMatch: 'full', component: AboutPageComponent },
  { path: 'events', pathMatch: 'full', component: EventsPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
