import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BlogService } from '../_services/blog.service';
import { Blog } from '../_models/blog';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

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
              private route: ActivatedRoute,
              private titleService: Title) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      const blogName = data.id;
      this.titleService.setTitle(blogName.split('-').join(' '));
      this.blogService.getBlog(blogName).subscribe(response => {
        this.blog = response;
      });
    });
  }

}
