import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'blog', loadChildren: './blog/blog.module#BlogModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: []
})
export class AppRoutingModule { }
