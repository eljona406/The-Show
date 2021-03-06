import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Info } from '../model/info.model';

@Injectable({
  providedIn: 'root'
})
export class ShowInfoService {
  URL='https://api.sampleapis.com/futurama';

  constructor( private http : HttpClient) {}

     public showInfo(): Observable<Info[]> {
       return this.http.get<Info[]>(this.URL + '/info');
     }

}
