import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/model/quiz.model';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  quiz! : Quiz[]
  constructor(private quizService : QuizService) { }

  ngOnInit(): void {
    this.getQuestions()
  }
getQuestions(){
  this.quizService.getQuiz().subscribe(data =>{
    console.log(data)
    this.quiz= data
  })
}
}
