import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;
  public loginFailed: boolean = false;

  constructor(private authservice: AuthService,
              private router: Router) { }


  onLogin() {
    const subscription = this.authservice.login({username: this.username, password: this.password}).subscribe(next => {
      console.log('Login success');
      console.log(next);
      subscription.unsubscribe();
      this.router.navigate(['/blog']);
    }, error => {
      console.log(error);
      this.loginFailed = true;
      subscription.unsubscribe();
    });
  }
  ngOnInit() {
  }

}
