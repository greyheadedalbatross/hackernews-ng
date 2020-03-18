import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StoriesComponent} from './stories/stories.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    component: StoriesComponent,
    data: {type: 'top'}
  },
  {
    path: 'top',
    component: StoriesComponent,
    data: {type: 'top'}
  },
  {
    path: 'top/:page',
    component: StoriesComponent,
    data: {type: 'top'}
  },
  {
    path: 'new',
    component: StoriesComponent,
    data: {type: 'new'}
  },
  {
    path: 'new/:page',
    component: StoriesComponent,
    data: {type: 'new'}
  },
  {
    path: 'show',
    component: StoriesComponent,
    data: {type: 'show'}
  },
  {
    path: 'show/:page',
    component: StoriesComponent,
    data: {type: 'show'}
  },
  {
    path: 'ask',
    component: StoriesComponent,
    data: {type: 'ask'}
  },
  {
    path: 'ask/:page',
    component: StoriesComponent,
    data: {type: 'ask'}
  },
  {
    path: 'jobs',
    component: StoriesComponent,
    data: {type: 'jobs'}
  },
  {
    path: 'jobs/:page',
    component: StoriesComponent,
    data: {type: 'jobs'}
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
