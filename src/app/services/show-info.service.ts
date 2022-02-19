import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Info } from '../model/info.model';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ShowInfoService {

  constructor( private http : HttpClient) {}

     public showInfo(): Observable<Info[]> {
       return this.http.get<Info[]>('https://api.sampleapis.com/futurama/info')
     }

}
