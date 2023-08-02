import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from '../models/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  @Input() category!: any;
  @Input() currentTeam!: string;
  @Input() question!: Question; // Assuming this property is passed from the parent

  @Output() answer = new EventEmitter<string>();

  selectedAnswer: string | null = null;

  selectAnswer(option: string) {
    this.selectedAnswer = option;
  }

  submitAnswer() {
    if (this.selectedAnswer !== null) {
      this.answer.emit(this.selectedAnswer);
      this.selectedAnswer = null;
    }
  }
}