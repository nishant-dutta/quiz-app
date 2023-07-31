import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ViewQuestionsComponent } from './view-questions/view-questions.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'view-questions', component: ViewQuestionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
