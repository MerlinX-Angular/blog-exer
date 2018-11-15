import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {
  id;
  getBlogByUrlId;
  getBlogs = this.blogService.getBlogs || [''];
  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe( id => { this.id = id.get('id'); })
    this.getBlogByUrlId = this.getBlogs.filter((blog) => blog.id == this.id);
  }

  renewBlog(title, author, description, image, id) {
    this.blogService.updateBlog(title, author, description, image, id);
  }
}
