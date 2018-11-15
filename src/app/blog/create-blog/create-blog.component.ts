import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';


@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {


  constructor( private blogService: BlogService ) { }

  addBlog(title, author, description, image) {
    this.blogService.addNewBlog(title, author, description, image);
  }

  ngOnInit() {
  }

}
