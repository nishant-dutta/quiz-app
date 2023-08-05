import { Component } from '@angular/core';
import { Question } from '../view-questions/view-questions.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-create-questions',
  templateUrl: './create-questions.component.html',
  styleUrls: ['./create-questions.component.scss']
})
export class CreateQuestionsComponent {
  constructor(private http: HttpClient){}

  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    })
};

  first_question: Question = new Question("", "", []);
  questions: Question[] = [this.first_question]

  addNewQuestion(){
    let new_question = new Question("", "", []);
    this.questions.push(new_question);
  }

  deleteQuestion(index: number){
    this.questions.splice(index, 1)
  }

  saveQuestions(){
    this.http.post("http://localhost:8080/questions", JSON.stringify(this.questions), this.httpOptions).subscribe(data => {
      console.log(data)
    });
  }
}
