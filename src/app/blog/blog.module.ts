import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BlogRoutingModule } from './blog-routing.module';

import { CreateBlogComponent } from './create-blog/create-blog.component';
import { BlogComponent } from './blog.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';

@NgModule({
  declarations: [
    CreateBlogComponent,
    BlogComponent,
    EditBlogComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    FormsModule
  ]
})
export class BlogModule { }
