import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.serverUrl + 'auth/';
  constructor(private http: HttpService) { }

  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model, false).pipe(map(data => {
      const user: any = data;
      if (user) {
        localStorage.setItem('token', user.token);
      }
    })
    );
  }




}
