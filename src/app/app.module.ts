import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { ContentComponent } from './layout/content/content.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { routes } from './route.config';
import { AboutMeComponent } from './about-me/about-me.component';
import { BlogEditorComponent } from './blog-editor/blog-editor.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './_services/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BlogService } from './_services/blog.service';
import { SharedService } from './_services/shared.service';
import { FileService } from './_services/file.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { BlogListingComponent } from './admin/blog-listing/blog-listing.component';
import { UiService } from './_services/ui.service';
import { AuthInterceptor } from './_services/auth.interceptor';


@NgModule({
   declarations: [
      AppComponent,
      LayoutComponent,
      HeaderComponent,
      ContentComponent,
      FooterComponent,
      HomeComponent,
      AboutMeComponent,
      BlogEditorComponent,
      LoginComponent,
      BlogpostComponent,
      BlogListingComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      CKEditorModule,
      FormsModule,
      HttpClientModule,
      RouterModule.forRoot(routes)
   ],
   providers: [
      AuthService,
      BlogService,
      SharedService,
      FileService,
      UiService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
      }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
