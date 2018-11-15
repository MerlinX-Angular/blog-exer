import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  getBlogs;
  p = 1;

  constructor(private blogService: BlogService ) {}

  ngOnInit() {
    this.getBlogs = this.blogService.getBlogs;
  }
}

