import {Route} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';

export const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'blog', component: HomeComponent},
  {path: 'about-me', component: AboutMeComponent},
];
