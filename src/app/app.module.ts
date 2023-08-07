import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { EditorModule } from 'primeng/editor';
import { CardModule } from 'primeng/card';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { AppComponent } from './app.component';
import { CreateQuestionsComponent } from './create-questions/create-questions.component';
import { ViewQuestionsComponent } from './view-questions/view-questions.component';
import { LoginComponent } from './login/login.component';
import { DividerModule } from 'primeng/divider';
import { ChipsModule } from 'primeng/chips';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';

import { HttpClientModule } from '@angular/common/http';
import { AuthService } from 'src/auth/auth.service';
import { MessageService } from 'primeng/api';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateQuestionsComponent,
    ViewQuestionsComponent,
    LoginComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    FieldsetModule,
    DividerModule,
    EditorModule,
    CardModule,
    InputTextareaModule,
    ChipsModule,
    MenubarModule,
    HttpClientModule,
    ToastModule
  ],
  providers: [AuthService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
