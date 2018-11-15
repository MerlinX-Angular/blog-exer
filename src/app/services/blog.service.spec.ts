import { TestBed } from '@angular/core/testing';

import { BlogService } from './blog.service';

describe('BlogService-localstorage', () => {

  const title = 'first';
  const author = 'fauthor';
  const description = 'fdesc';
  const image = 'img1';
  const localMock =
  [
    {id: 1, title: 'first', author: 'fauthor', description: 'fdesc', image: 'img1'}
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({})
    let store = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };
    spyOn(localStorage, 'getItem')
    .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
    .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem')
    .and.callFake(mockLocalStorage.removeItem);
  });

  it('should be created', () => {
    const service: BlogService = TestBed.get(BlogService);
    expect(service).toBeTruthy();
  });

  it('should store blog in localStorage',  () => {
    const service: BlogService = TestBed.get(BlogService);
    service.addNewBlog(title, author, description, image);
    const info = localStorage.getItem('blog');
    expect(JSON.parse(info)).toEqual(localMock);
  });

  it('should delete blog from localstorage',  () => {
    const service: BlogService = TestBed.get(BlogService);
    service.addNewBlog(title, author, description, image);
    service.removeBlog('1');
    expect(localStorage.getItem('blog')).toBe('[]');
  });

  it('should update blog', () => {
    const service: BlogService = TestBed.get(BlogService);
    service.addNewBlog(title, author, description, image);
    const oldInfo = localStorage.getItem('blog');
    service.updateBlog('updated title', 'updated author', 'updated description', 'updated image', 1);
    const updatedInfo = localStorage.getItem('blog');
    expect(oldInfo).not.toEqual(updatedInfo);
  });
});
