import { Component } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import PreElement from 'ckeditor5-code-block/src/pre';
import { Blog } from '../models/blog';
import { BlogService } from '../_services/blog.service.ts';
import { FileService } from '../_services/file.service';
import { SharedService } from '../_services/shared.service';
import { ImageUploaderService } from '../_services/ImageUploader.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-blog-editor',
  templateUrl: './blog-editor.component.html',
  styleUrls: ['./blog-editor.component.css'],
  animations: [trigger('hideable', [
    state('in', style({
      opacity: 1
    })),
    transition('void => *', [
      style({
        opacity: 0,
      }),
      animate(300)
    ]),
    transition('* => void', [
      animate(300, style({
        opacity: 0,
      }))
    ])
  ])]
})
export class BlogEditorComponent {
  public Editor = ClassicEditor;

  public blog: Blog;

  ckconfig = {
    extraPlugins: [ this.UploadAdapterPlugin ]
  };



  public blogSaved = false;

  UploadAdapterPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return new ImageUploaderService(loader, '/image');
    };
  }

  constructor(private blogService: BlogService,
              private fileService: FileService,
              private sharedService: SharedService) {
    this.blog = new Blog();
    this.blog.Body = ' ';
  }

  onSaveBlog() {
    this.blog.Url = this.blog.Heading.split(' ').join('-');
    this.blogService.saveBlog(this.blog).subscribe(data => {
      console.log(data);
      this.blogSaved = !this.blogSaved;
    });
  }

  onPublishBlog() {

  }

  onPreviewBlog() {

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

