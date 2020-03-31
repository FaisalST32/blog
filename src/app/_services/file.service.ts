import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';
import { Observable } from 'rxjs';

@Injectable()
export class FileService {


  constructor(private http: HttpService,
    private sharedService: SharedService) { }

  public uploadFile(file): Observable<any> {
    const formData = new FormData();
    formData.append(file.name, file);
    return this.http.post<any>(this.sharedService.baseUrl + 'blog/uploadfile', formData);
  }
}
