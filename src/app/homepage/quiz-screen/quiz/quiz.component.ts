import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/model/quiz.model';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  quiz! : Quiz[];
  public questionList : any = [];
  public currentQuestion : number = 0;
  public points : number = 0;
  counter = 60;
  correctAnswer : number = 0;
  incorrectAnswer : number = 0;
  progress: string = '0';
  isQuizCompleted : boolean = false;
  constructor(private quizService : QuizService) { }

  ngOnInit(){
    this.getQuestions();
  }
  getQuestions(){
    this.quizService.getQuiz().subscribe(data =>{
      console.log(data);
      this.questionList= data;
      console.log(this.questionList);
    })
  }
  nextQuestion(){
  this.currentQuestion++ ;
  }
  previousQuestion(){
  this.currentQuestion-- ;
  }
  answer(currentQ:number,option:any){
    console.log(currentQ);
    console.log(option);
    console.log(this.questionList[currentQ-1].correctAnswer);
    if(currentQ === this.questionList.length){
      this.isQuizCompleted = true;
    }

    if(option === this.questionList[currentQ-1].correctAnswer){
      this.points+=10;
      
      this.correctAnswer++ ;
      setTimeout(()=>{
        this.currentQuestion++ ;
        this.getProgressPercentage();
      },1000);
      
    }else{
      setTimeout(()=>{
       this.currentQuestion++ ;
       this.incorrectAnswer++ ;
       this.getProgressPercentage();
      },1000);
      this.points += 0 ;
      }
  }
  resetQuiz(){
    this.getQuestions();
    this.points = 0;
    this.currentQuestion = 0;
    this.progress = '0';
    this.isQuizCompleted = false;
  }
  getProgressPercentage(){
    this.progress = ((this.currentQuestion/this.questionList.length)*100).toString();
    return this.progress;
  }

  /*
  --- fix the next button =>  Final Answer 
  --- improve results display
  --- fix the image in header
  --- no inline style

  */
  }