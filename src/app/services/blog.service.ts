import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  info;
  lastID;
  getObjListId;
  getBlogs = JSON.parse(localStorage.getItem('blog'));

  constructor() {}

  addNewBlog(title, author, description, image) {
    if (this.getBlogs === null ) {
      this.getBlogs = [];
      this.lastID = 1;
    } else if (this.getBlogs.length == '') {
    this.lastID = 1;
    } else {
      this.lastID = this.getBlogs[this.getBlogs.length - 1].id;
      this.lastID++;
    }

    this.info = JSON.stringify({'id': this.lastID, 'title': title, 'author': author, 'description': description, 'image': image})
    this.getBlogs.push(JSON.parse(this.info));
    localStorage.setItem('blog', JSON.stringify(this.getBlogs));
    this.getBlogs = JSON.parse(localStorage.getItem('blog'));
  }

  removeBlog(id) {
    this.getObjListId = this.getBlogs.findIndex(i => i.id === parseInt(id));
    this.getBlogs.splice(this.getObjListId, 1);
    localStorage.setItem('blog', JSON.stringify(this.getBlogs));
  }

  updateBlog(title, author, description, image, id) {
    this.getObjListId = this.getBlogs.findIndex(i => i.id === parseInt(id));
    this.getBlogs.splice(this.getObjListId, 1,
      ({'id': parseInt(id), 'title': title, 'author': author, 'description': description, 'image': image}));
    localStorage.setItem('blog', JSON.stringify(this.getBlogs));
  }

}
