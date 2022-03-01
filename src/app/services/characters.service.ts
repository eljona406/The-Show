import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Characters } from '../model/characters.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
   URL='https://api.sampleapis.com/futurama';

  constructor( private http : HttpClient) {}

     public showCharacters(): Observable<Characters[]> {
       return this.http.get<Characters[]>(this.URL +'/characters')
     }
     
     public getCharactersById(id :number ): Observable<Characters> {
      return this.http.get<Characters>(this.URL +'/characters'+`/${id}`)
    }
}
