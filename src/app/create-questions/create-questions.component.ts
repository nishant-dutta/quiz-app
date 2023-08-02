import { Component } from '@angular/core';
import { Question } from '../view-questions/view-questions.component';

@Component({
  selector: 'app-create-questions',
  templateUrl: './create-questions.component.html',
  styleUrls: ['./create-questions.component.scss']
})
export class CreateQuestionsComponent {
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
    console.log("Questions: ", this.questions)
  }
}
