import {Route} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { BlogEditorComponent } from './blog-editor/blog-editor.component';
import { LoginComponent } from './login/login.component';
import { BlogpostComponent } from './blogpost/blogpost.component';

export const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'blog', component: HomeComponent},
  {path: 'about-me', component: AboutMeComponent},
  {path: 'write-new', component: BlogEditorComponent},
  {path: 'login', component: LoginComponent},
  {path: 'blogs/:id', component: BlogpostComponent}
];
