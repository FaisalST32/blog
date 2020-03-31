import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(
    private http: HttpClient
  ) {}

  public get<T>(url: string, requiresAuth = true, headers: HttpHeaders = new HttpHeaders()): Observable<T> {
    if (requiresAuth) {
      headers = this.addAuthorizationHeader(headers);
    }

    return this.http.get<T>(url, {headers: headers });
  }

  public post<T>(url: string, data: any, requiresAuth = true, headers: HttpHeaders = new HttpHeaders()): Observable<T> {
    if (requiresAuth) {
      headers = this.addAuthorizationHeader(headers);
    }

    return this.http.post<T>(url, data, {headers: headers});
  }


  private addAuthorizationHeader(headers: HttpHeaders): HttpHeaders {
    const authToken: string = window.localStorage.getItem('token');
    if (!authToken) {
      return headers;
    }
    return headers.append('Authorization', 'Bearer ' + authToken);
  }
}
