import { Component } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import PreElement from 'ckeditor5-code-block/src/pre';
import { Blog } from '../_models/blog';
import { BlogService } from '../_services/blog.service';
import { FileService } from '../_services/file.service';
import { SharedService } from '../_services/shared.service';
import { ImageUploaderService } from '../_services/ImageUploader.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router';

// TODO: Create Service
declare var toastfs: any;

@Component({
  selector: 'app-blog-editor',
  templateUrl: './blog-editor.component.html',
  styleUrls: ['./blog-editor.component.css'],
  // animations: [trigger('hideable', [
  //   state('in', style({
  //     opacity: 1,
  //     transform: 'translateY(0px)'
  //   })),
  //   transition('void => *', [
  //     style({
  //       opacity: 0,
  //       transform: 'translateY(10px)'
  //     }),
  //     animate(300)
  //   ]),
  //   transition('* => void', [
  //     animate(300, style({
  //       opacity: 0,
  //       translateY: '10px'
  //     }))
  //   ])
  // ])]
})
export class BlogEditorComponent {
  public Editor = ClassicEditor;

  public blog: Blog;

  ckconfig = {
    extraPlugins: [ this.UploadAdapterPlugin ]
  };

  UploadAdapterPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return new ImageUploaderService(loader, '/image');
    };
  }

  constructor(private blogService: BlogService,
              private fileService: FileService,
              private sharedService: SharedService,
              private route: ActivatedRoute,
              private router: Router) {
    this.blog = new Blog();
    this.blog.Body = ' ';

    this.route.params.subscribe(response => {
      if(response) {
        this.blogService.getBlogForEdit(response.url).subscribe(data => {
          this.blog = data;
        });
      }
    });
  }

  onSaveBlog() {
    this.blog.Url = this.blog.Heading.split(' ').join('-');
    this.blogService.saveBlog(this.blog).subscribe(data => {
      this.blog.Id = data.Id;
      toastfs.success('Blog saved successfully');
    });
  }

  onPublishBlog() {

  }

  onPreviewBlog() {
    // this.router.navigate(['blogs', this.blog.Url]);
    window.open('blogs/' + this.blog.Url);
  }

  uploadBanner(files: any) {
    if (files.length !== 0) {
      this.fileService.uploadFile(files[0]).subscribe(response => {
        this.blog.HeaderImagePath = this.sharedService.contentUrl + response.fileName;
      },
      error => console.log(error));
    }
  }
}

