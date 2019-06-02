import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';
import { HttpClient } from '@angular/common/http';
import { SharedService } from './shared.service';
import { map } from 'rxjs/operators';

@Injectable()
export class BlogService {

  constructor(private http: HttpClient,
              private sharedService: SharedService) { }

  saveBlog(blog: Blog) {
    return this.http.post(this.sharedService.baseUrl + 'blog/save', blog);
  }

  publishBlog(blog: Blog) {
    return this.http.post(this.sharedService.baseUrl + 'blog/publish', blog);
  }

  getBlogs(){
    return this.http.get<Blog[]>(this.sharedService.baseUrl + 'blog').pipe(map(blogs => {
      return blogs.map(blog => {
        let imageFileName = blog.HeaderImagePath;
        blog.HeaderImagePath = this.sharedService.contentUrl + imageFileName;
        return blog;
      });
    }));
  }
}
