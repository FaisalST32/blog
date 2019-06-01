import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';
import { HttpClient } from '@angular/common/http';
import { SharedService } from './shared.service';

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
}
