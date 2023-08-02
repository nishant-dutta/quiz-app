import { Component } from '@angular/core';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.scss']
})
export class ViewQuestionsComponent {
  questions: Question[] = [];
  text: string | undefined = "Hello";


  ngOnInit(){
    let question1 = new Question("What is Java?", "Java is a programming language which is platform independent", ["java"]);
    let question2 = new Question("Do you think ‘main’ used for main method is a keyword in Java?", `No, main is just a name of method. 
                                      There can be multiple methods with same name main in a class file. It is not a keyword in Java.`, ["java"]);
    let question3 = new Question("How does ClassLoader work in Java?", `In Java, ClassLoader is a class that is used to load files in JVM. ClassLoader loads files from their physical file locations e.g. Filesystem, Network location etc.

    There are three main types of ClassLoaders in Java.
    
    Bootstrap ClassLoader: This is the first ClassLoader. It loads classes from rt.jar file.
    Extension ClassLoader: It loads class files from jre/lib/ext location.
    Application ClassLoader: This ClassLoader depends on CLASSPATH to find the location of class files. If you specify your jars in CLASSPATH, then this ClassLoader will load them.`, ["java"]);
    
    this.questions = [question1, question2, question3];

  }
}

/* ************************** */
export class Question{
  question: string;
  answer: string;
  topics: string[];

  constructor(question: string, answer: string, topics: string[]){
    this.question = question;
    this.answer = answer;
    this.topics = topics;
  }
}
