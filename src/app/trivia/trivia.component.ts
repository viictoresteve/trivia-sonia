import { Component } from '@angular/core';
import { Question } from '../models/question.model';

enum Team {
  TeamA = 'Los Sonios',
  TeamB = 'Les Sonies',
  TeamC = 'Las Sonias',
}

enum Category {
  CategoryA = 'encanto',
  CategoryB = 'personal',
  CategoryC = 'media',
}

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css'],
})
export class TriviaComponent {
  showQuestion = false;
  currentQuestion!: Question;
  triviaQuestions: Question[] = [];
  teams: Record<Team, number> = {
    [Team.TeamA]: 0,
    [Team.TeamB]: 0,
    [Team.TeamC]: 0,
  };
  currentTeam: Team = Team.TeamA;
  questionCategories: Category[] = Object.values(Category);
  currentCategory: Category | null = null;
  teamNames: Team[] = Object.keys(this.teams) as Team[];

  constructor() {
    this.triviaQuestions = questions;
    this.currentCategory = this.getRandomCategory();

    this.getCurrentQuestion();
  }

  startGame() {
    this.showQuestion = true;
    this.currentCategory = this.getRandomCategory();
    this.getCurrentQuestion();
  }
  getCurrentQuestion() {
    const categoryQuestions = this.triviaQuestions.filter(
      (q) => q.category === this.currentCategory
    );
    const randomIndex = Math.floor(Math.random() * categoryQuestions.length);
    this.currentQuestion = categoryQuestions[randomIndex];
  }
  submitAnswer(isCorrect: any) {
    if (isCorrect) {
      this.teams[this.currentTeam] += 1;
    }

    this.changeTeam();
    this.showQuestion = false;
  }

  changeTeam() {
    this.currentTeam =
      this.currentTeam === Team.TeamA ? Team.TeamB : Team.TeamA;
  }

  getRandomCategory(): Category {
    const randomIndex = Math.floor(
      Math.random() * this.questionCategories.length
    );
    return this.questionCategories[randomIndex];
  }
}

export const questions: Question[] = [
  {
    question: 'Favorite Disney movie?',
    options: ['The Lion King', 'Frozen', 'Beauty and the Beast', 'Toy Story'],
    answer: 'The Lion King',
    category: 'encanto',
  },
  {
    question: "A skill you're currently developing?",
    options: ['Coding', 'Cooking', 'Playing an instrument', 'Painting'],
    answer: 'Coding',
    category: 'personal',
  },
  {
    question: 'Top movie recommendation?',
    options: ['Inception', 'The Avengers', 'Harry Potter', 'Pulp Fiction'],
    answer: 'Inception',
    category: 'media',
  },
  {
    question: 'Favorite Disney princess?',
    options: ['Cinderella', 'Ariel', 'Belle', 'Mulan'],
    answer: 'Belle',
    category: 'encanto',
  },
  {
    question: 'Preferred way to unwind after a long day?',
    options: [
      'Watching a movie',
      'Reading a book',
      'Taking a bath',
      'Listening to music',
    ],
    answer: 'Reading a book',
    category: 'personal',
  },
  {
    question: "Best TV show you've watched recently?",
    options: ['Stranger Things', 'The Crown', 'Friends', 'Breaking Bad'],
    answer: 'Stranger Things',
    category: 'media',
  },
  // Add more questions here
];
