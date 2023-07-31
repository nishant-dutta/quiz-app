import { Component } from '@angular/core';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.scss']
})
export class ViewQuestionsComponent {
  questions: Question[] = [];
  text: string | undefined;


  ngOnInit(){
    let question1 = new Question(1, "What is Java?", "Java is a programming language which is platform independent", ["java"]);
    let question2 = new Question(2, "Do you think ‘main’ used for main method is a keyword in Java?", `No, main is just a name of method. 
                                      There can be multiple methods with same name main in a class file. It is not a keyword in Java.`, ["java"]);
    let question3 = new Question(3, "How does ClassLoader work in Java?", `In Java, ClassLoader is a class that is used to load files in JVM. ClassLoader loads files from their physical file locations e.g. Filesystem, Network location etc.

    There are three main types of ClassLoaders in Java.
    
    Bootstrap ClassLoader: This is the first ClassLoader. It loads classes from rt.jar file.
    Extension ClassLoader: It loads class files from jre/lib/ext location.
    Application ClassLoader: This ClassLoader depends on CLASSPATH to find the location of class files. If you specify your jars in CLASSPATH, then this ClassLoader will load them.`, ["java"]);
    
    this.questions = [question1, question2, question3];

  }
}

/* ************************** */
class Question{
  questionId: number;
  question: string;
  answer: string;
  topics: string[];
  isCollapsed: boolean = true;
  isBookmarked: boolean = false;

  constructor(questionId: number, question: string, answer: string, topics: string[]){
    this.questionId = questionId;
    this.question = question;
    this.answer = answer;
    this.topics = topics;
  }
}
