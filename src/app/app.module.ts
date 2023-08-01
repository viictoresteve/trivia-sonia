import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TriviaComponent } from './trivia/trivia.component';
import { QuestionComponent } from './question/question.component';
import { AppRoutingModule } from './app-routing.module'; // Ensure the correct path to AppRoutingModule

@NgModule({
  declarations: [AppComponent, TriviaComponent, QuestionComponent], // Add QuestionComponent here
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}