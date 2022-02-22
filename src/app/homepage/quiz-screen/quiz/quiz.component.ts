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
  //to get the list of questions
  getQuestions(){
    this.quizService.getQuiz().subscribe(data =>{
      console.log(data);
      this.questionList= data;
      console.log(this.questionList);
    })
  }
  //going to next question after clicking the arrow
  nextQuestion(){
  this.currentQuestion++ ;
  }
//getting the number of the current question and the selected option , 
//and comparing to the correct question  dhe validating it with green or red color display
  answer(currentQ:number,option:any){
    console.log(currentQ);
    console.log(option);
    console.log(this.questionList[currentQ-1].correctAnswer);

    if(currentQ === this.questionList.length){
      this.isQuizCompleted = true;//to display the quiz or the score
    }
//if the selected option is the correct one we add 10 points to total and go to next question,otherwise just go to next question
    if(option === this.questionList[currentQ-1].correctAnswer){
      this.points+=10;
      this.correctAnswer++ ;
      setTimeout(()=>{
        this.currentQuestion++ ;
      },500);
      
    }else{
      setTimeout(()=>{
       this.currentQuestion++ ;
       this.incorrectAnswer++ ;
      },500);
      this.points += 0 ;
      }
  }
  //restart the quiz
  resetQuiz(){
    this.getQuestions();
    this.points = 0;
    this.currentQuestion = 0;
    this.progress = '0';
    this.isQuizCompleted = false;
  }
  }