import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BlogService } from '../_services/blog.service.ts';
import { Blog } from '../models/blog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BlogpostComponent implements OnInit {

  blog: Blog;

  blogName: string;

  constructor(private blogService: BlogService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      const blogName = data.id;
      this.blogService.getBlog(blogName).subscribe(response => {
        this.blog = response;
      });
    });

  }

}
