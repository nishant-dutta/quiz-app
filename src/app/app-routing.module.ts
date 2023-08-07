import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewQuestionsComponent } from './view-questions/view-questions.component';
import { LoginComponent } from './login/login.component';
import { CreateQuestionsComponent } from './create-questions/create-questions.component';
import { AuthGuard } from 'src/auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'view-questions', pathMatch: 'full' },
  { path: 'view-questions', component: ViewQuestionsComponent },
  { path: 'create-questions', component: CreateQuestionsComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  //todo: { path:'**', component:CustomerrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
