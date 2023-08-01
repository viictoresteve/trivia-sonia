// app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TriviaComponent } from './trivia/trivia.component';

const routes: Routes = [
  { path: '', redirectTo: 'trivia', pathMatch: 'full' },
  { path: 'trivia', component: TriviaComponent },
  // Add more routes here for future expansion
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
