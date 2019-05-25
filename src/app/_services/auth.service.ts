import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.serverUrl + 'auth/';
  private token: string;

  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model).pipe(map(data => {
      const user: any = data;
      if (user) {
        localStorage.setItem('token', user.token);
      }
    })
    );
  }




}
