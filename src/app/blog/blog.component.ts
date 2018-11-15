import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../services/blog.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styles: []
})
export class BlogComponent implements OnInit {
  id;
  getBlogs = this.blogService.getBlogs || [''];
  getBlogByUrlId;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe( id => { this.id = id.get('id'); })
    this.getBlogByUrlId = this.getBlogs.filter((blog) => blog.id == this.id);
  }

  remove(id) {
    if (confirm('Really delete the post?')) {
      this.blogService.removeBlog(id);
      this.router.navigate([''])
    }
  }


}
