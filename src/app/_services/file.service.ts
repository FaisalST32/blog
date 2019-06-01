import { Injectable } from "@angular/core";
import { SharedService } from "./shared.service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class FileService {


  constructor(private http: HttpClient,
    private sharedService: SharedService) { }

  public uploadFile(file): Observable<any> {
    let formData = new FormData();
    formData.append(file.name, file);
    return this.http.post<any>(this.sharedService.baseUrl + 'blog/uploadfile', formData);
  }
}
