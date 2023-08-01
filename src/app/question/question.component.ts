import { Component, Input } from '@angular/core';
import { Question } from '../models/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  @Input() question!: Question;
  answerStatus = '';

  checkAnswer(selectedOption: string) {
    if (selectedOption === this.question.answer) {
      this.answerStatus = 'Correct!';
    } else {
      this.answerStatus = 'Wrong!';
    }
  }
}