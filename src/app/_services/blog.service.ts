import { Injectable } from '@angular/core';
import { Blog } from '../_models/blog';
import { HttpClient } from '@angular/common/http';
import { SharedService } from './shared.service';
import { map } from 'rxjs/operators';
import { AdminBlog } from '../_models/admin-blog';

@Injectable()
export class BlogService {

  constructor(private http: HttpClient,
              private sharedService: SharedService) { }

  saveBlog(blog: Blog) {
    blog = this.parseCodeBlocks(blog);
    return this.http.post(this.sharedService.baseUrl + 'blog/save', blog);
  }

  publishBlog(blog: Blog) {
    return this.http.post(this.sharedService.baseUrl + 'blog/publish', blog);
  }

  getBlogs() {
    return this.http.get<Blog[]>(this.sharedService.baseUrl + 'blog').pipe(map(blogs => {
      return blogs.map(blog => {
        const imageFileName = blog.HeaderImagePath;
        blog.HeaderImagePath = this.sharedService.contentUrl + imageFileName;
        return blog;
      });
    }));
  }

  getBlog(blogName: string) {
    return this.http.get<Blog>(this.sharedService.baseUrl + 'blog/' + blogName).pipe(map(data => {
      data.HeaderImagePath = this.sharedService.contentUrl + data.HeaderImagePath;
      return data;
    })
    );
  }

  parseCodeBlocks(blog: Blog): Blog {
    blog.Body = blog.Body.replace(/--code block start--/g, '<pre><code class="language-typescript">')
                        .replace(/--code block end--/g, '</code></pre>');
    return blog;
  }

  getAllBlogs() {
    return this.http.get<Blog[]>(this.sharedService.baseUrl + 'blog/getall').pipe(map(blogs => {
      return blogs.map(blog => {
        const imageFileName = blog.HeaderImagePath;
        blog.HeaderImagePath = this.sharedService.contentUrl + imageFileName;
        return blog;
      });
    }));
  }

  getBlogAnalytics() {
    return this.http.get<AdminBlog[]>(this.sharedService.baseUrl + 'blog/analytics');
  }
}
