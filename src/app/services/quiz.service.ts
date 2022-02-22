import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from '../model/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
 URL='https://api.sampleapis.com/futurama'
  constructor( private http : HttpClient) {}

     public getQuiz():Observable<Quiz[]> {
       return this.http.get<Quiz[]>( this.URL + '/questions')
     }
}
