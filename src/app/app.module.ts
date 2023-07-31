import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { EditorModule } from 'primeng/editor';

import { AppComponent } from './app.component';
import { CreateQuestionsComponent } from './create-questions/create-questions.component';
import { ViewQuestionsComponent } from './view-questions/view-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateQuestionsComponent,
    ViewQuestionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    FieldsetModule,
    EditorModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
