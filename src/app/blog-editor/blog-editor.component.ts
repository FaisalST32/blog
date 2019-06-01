import { Component, ViewChild } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Blog } from '../models/blog';
import { BlogService } from '../_services/blog.service.ts';
import { FileService } from '../_services/file.service';
import { SharedService } from '../_services/shared.service';
import { ImageUploaderService } from '../_services/ImageUploader.service';

@Component({
  selector: 'app-blog-editor',
  templateUrl: './blog-editor.component.html',
  styleUrls: ['./blog-editor.component.css']
})
export class BlogEditorComponent {
  public Editor = ClassicEditor;

  public blog: Blog;

  ckconfig = {
    extraPlugins: [ this.TheUploadAdapterPlugin ]
  };

  TheUploadAdapterPlugin(editor) {
    console.log('TheUploadAdapterPlugin called');
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
    this.blogService.saveBlog(this.blog).subscribe(data => {
      console.log(data);
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

