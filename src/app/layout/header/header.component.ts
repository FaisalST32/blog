import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  menuExpanded = false;

  constructor(private router: Router) {}

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/blog']);
  }

  toggleMenu() {
    this.menuExpanded = !this.menuExpanded;
  }

}
