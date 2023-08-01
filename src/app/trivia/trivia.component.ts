import { Component } from '@angular/core';
import { Question, questions } from '../models/question.model';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent {
  showQuestion = false;
  currentQuestion!: Question;
  triviaQuestions: Question[] = [];
  constructor() {
    this.triviaQuestions = questions;
  }
  startGame() {
    this.showQuestion = true;
    const randomIndex = Math.floor(Math.random() * this.triviaQuestions.length);
    console.log('random index', randomIndex);
    console.log('trivia questions', questions)
    this.currentQuestion = this.triviaQuestions[randomIndex];
    console.log('currentQuestion', this.currentQuestion)

  }
}