import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ViewQuestionsComponent } from './view-questions/view-questions.component';
import { LoginComponent } from './login/login.component';
import { CreateQuestionsComponent } from './create-questions/create-questions.component';

const routes: Routes = [
  { path: '', redirectTo: 'view-questions', pathMatch: 'full' },
  { path: 'view-questions', component: ViewQuestionsComponent },
  { path: 'create-questions', component: CreateQuestionsComponent },
  { path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
