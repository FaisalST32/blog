import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BlogService } from '../_services/blog.service';
import { Blog } from '../_models/blog';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { UiService } from '../_services/ui.service';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BlogpostComponent {

  blog: Blog;

  blogName: string;

  constructor(private blogService: BlogService,
    private route: ActivatedRoute,
    private titleService: Title,
    private uiService: UiService) {
    this.route.params.subscribe(data => {
      this.uiService.showLoader();
      const blogName = data.id;
      this.titleService.setTitle(blogName.split('-').join(' '));
      this.blogService.getBlog(blogName).subscribe(response => {
        this.blog = response;
        this.uiService.hideLoader();
      });
    });
  }


}
