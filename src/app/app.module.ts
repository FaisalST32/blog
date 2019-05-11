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
import { HttpClientModule } from '@angular/common/http';


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
      LoginComponent
   ],
   imports: [
      BrowserModule,
      CKEditorModule,
      FormsModule,
      HttpClientModule,
      RouterModule.forRoot(routes)
   ],
   providers: [
     AuthService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
