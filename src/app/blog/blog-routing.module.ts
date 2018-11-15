import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from '../blog/blog.component';

import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';

const routes: Routes = [
  {path: 'create', component: CreateBlogComponent},
  {path: ':id/edit', component: EditBlogComponent},
  {path: ':id', component: BlogComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
