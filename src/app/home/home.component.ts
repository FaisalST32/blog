import { Component, AfterViewInit } from '@angular/core';
import { Blog } from '../models/blog';
import { BlogService } from '../_services/blog.service.ts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public blogPosts: Blog[];
  public imagesCount: number;
  public hideLoader = false;
  public imagesLoadedCount = 0;

  constructor(private blogService: BlogService,
              private router: Router){
    this.blogService.getBlogs().subscribe(blogs => {
      this.blogPosts = blogs;
      this.imagesCount = this.blogPosts.length;
      this.hideLoader = true;
    });
  }

  // public imageLoaded() {
  //   console.log('imageLoaded');
  //   this.imagesLoadedCount = this.imagesLoadedCount + 1;
  //   if (this.imagesLoadedCount === this.imagesCount) {
  //     this.hideLoader = true;
  //   }
  // }

  // ngAfterViewInit(): void {
  //   this.hideLoader = true;
  // }

  onOpenPost(blogUrl){
    console.log(blogUrl);
    this.router.navigate(['/blogs', blogUrl])
  }




}
