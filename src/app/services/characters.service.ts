import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Characters } from '../model/characters.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor( private http : HttpClient) {}

     public showCharacters(): Observable<Characters[]> {
       return this.http.get<Characters[]>('https://api.sampleapis.com/futurama/characters')
     }
}
