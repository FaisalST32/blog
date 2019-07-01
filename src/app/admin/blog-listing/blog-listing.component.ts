import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/_services/blog.service';
import { Blog } from 'src/app/_models/blog';
import { AdminBlog } from 'src/app/_models/admin-blog';

@Component({
  selector: 'app-blog-listing',
  templateUrl: './blog-listing.component.html',
  styleUrls: ['./blog-listing.component.css']
})
export class BlogListingComponent implements OnInit {

  blogStats: AdminBlog[];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getBlogAnalytics().subscribe(response => {
      this.blogStats = response;
    },
    error => console.log(error)
    );
  }

}