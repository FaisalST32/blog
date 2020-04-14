import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { Blog } from '../_models/blog';
import { SharedService } from './shared.service';
import { map } from 'rxjs/operators';
import { AdminBlog } from '../_models/admin-blog';
import { Observable } from 'rxjs';

@Injectable()
export class BlogService {


  constructor(private http: HttpService,
              private sharedService: SharedService) { }

  saveBlog(blog: Blog): Observable<Blog> {
    let blogToPost = Object.assign({}, blog);
    blogToPost = this.parseCodeBlocks(blogToPost, true);
    return this.http.post<Blog>(this.sharedService.baseUrl + 'blog/save', blogToPost);
  }

  publishBlog(blogId: string) {
    return this.http.post(`${this.sharedService.baseUrl}blog/${blogId}/publish`, null);
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

  parseCodeBlocks(blog: Blog, toHtml): Blog {
    if (toHtml) {
      blog.Body = blog.Body.replace(/--code block start--/g, '<pre><code class="language-typescript">')
      .replace(/--code block end--/g, '</code></pre>');
    } else {
      blog.Body = blog.Body.replace(/<pre><code class="language-typescript">/g, '--code block start--')
      .replace(/<\/code><\/pre>/g, '--code block end--');
    }

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

  getBlogForEdit(url: string) {
    return this.getBlog(url).pipe(map(blog => {
      blog = this.parseCodeBlocks(blog, false);
      return blog;
    }));
  }
}
