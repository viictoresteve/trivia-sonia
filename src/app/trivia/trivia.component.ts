import { Component } from '@angular/core';
import { Question } from '../models/question.model';

enum Team {
  TeamA = 'Los Sonios',
  TeamB = 'Les Sonies',
  TeamC = 'Las Sonias',
}

enum Category {
  CategoryA = 'ENCANTO',
  CategoryB = 'CANET',
  CategoryC = 'MEDIA',
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
  showPopup = false; // Declare the showPopup variable

  constructor() {
    this.triviaQuestions = questions;
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
  getCategoryImage(category: string): string {
    switch (category) {
      case 'ENCANTO':
        return 'assets/mirabelpic.png';
      case 'MEDIA':
        return 'assets/nerdpic.png';
      case 'CANET':
        return 'assets/lalapic.png';
      default:
        return '';
    }
  }

  // ... Import statements and component definition

  // ...

handleAnswer(selectedAnswer: string) {
  const isCorrect = selectedAnswer === this.currentQuestion.answer;

  if (isCorrect) {
    this.teams[this.currentTeam] += 1;
    this.getCurrentQuestion();
  } else {
    this.showPopup = true;
  }

  if (!this.showPopup) {
    this.showQuestion = false;
  }
}

startGame() {
  this.showQuestion = true;
  this.showPopup = false;
  this.currentCategory = this.getRandomCategory();
  this.getCurrentQuestion();
}

// ...


closePopup() {
  this.showPopup = false;
  this.getCurrentQuestion();
  this.changeTeam();
  this.showQuestion = true;
}
stopPropagation(event: Event) {
  event.stopPropagation();
}

// Rest of the component code remains the same

 
  }
  

export const questions: Question[] = [
  {
    question: 'Com està te mare?',
    options: ['Bé, gràcies', 'Bé, no en tinc', 'Treballant', 'De baixa, feina complicada'],
    answer: 'Treballant',
    category: 'CANET',
  },
  {
    question: "Quin nom no és un gos del grup?",
    options: ['Trufona', 'Zeus', 'Lula', 'Llís'],
    answer: 'Lula',
    category: 'CANET',
  },
  {
    question: 'Quants anys te el Pere Xirau?',
    options: ['69', '42', '13', '55'],
    answer: '69',
    category: 'CANET',
  },
  {
    question: 'De quin color era el pepemovil?',
    options: ['Groc', 'Blanc', 'Vermell', 'Blau'],
    answer: 'Groc',
    category: 'CANET',
  },
  {
    question: 'Quants llibre ha llegit aquest any en ramos?',
    options: [
      '2',
      '5',
      '7',
      '4',
    ],
    answer: '7',
    category: 'CANET',
  },
  {
    question: "On s'ubica Cam Piquipugui?",
    options: ['C/ Verge de la Montserrat', 'C/ Verge de la Neus', 'C/ Verge del Roses', 'C/ Verge de la Trini'],
    answer: 'Stranger Things',
    category: 'CANET',
  },
  {
    question: "Quina és la pass del wifi del Roger G.?",
    options: ['DRFGARCIA', 'Fhjl52WQ24', 'Generalitat 10', 'Un bon café per un bon dia'],
    answer: 'Generalitat 10',
    category: 'CANET',
  },
  {
    question: 'On es van coneixer Alex i el Papiu?',
    options: [
      'Casal estiu',
      'Dibuix',
      'Escola de Musica',
      'Per les mores (treballen juntes)',
    ],
    answer: 'Escola de Musica',
    category: 'CANET',
  },
  {
    question: 'Qui mai ha estat al retrás cronic?',
    options: [
      'Marçal Xirau',
      'Vanessa Galvez',
      'Aitor Arán',
      'Bianca',
    ],
    answer: 'Bianca',
    category: 'CANET',
  },
  {
    question: 'Quina frase mítica li non dit a en papiu?',
    options: [
      'El meu pare no és metge',
      'Pau, ho has fet molt bé tete',
      'Molt bé Pau, tens raó',
      'Tanto hype para esto',
    ],
    answer: 'Tanto hype para esto',
    category: 'CANET',
  },
  {
    question: 'Quin és el primer video del Rupucuverso?',
    options: [
      'Joker',
      'La cruss',
      'Lágrimas de lluvia seca de horizontes pasados',
      'Bonus track: tutumtum',
    ],
    answer: 'La cruss',
    category: 'CANET',
  },
  {
    question: 'Quina camisa no té Alex',
    options: [
      'Gats',
      'Pinyes',
      'Zorros',
      'Flamencos',
    ],
    answer: 'Flamencos',
    category: 'CANET',
  },
  {
    question: 'De que s\'ha fet un powerpoint?',
    options: [
      'PJ de Smash que em follaria',
      'Per qué La Que Se Avecina és la millor serie',
      'Son en Ryan i el Chad parella',
      'Gays',
    ],
    answer: 'Per qué La Que Se Avecina és la millor serie',
    category: 'CANET',
  },
  {
    question: 'Per qué ens va castigar el Roger sense anar a se casa?',
    options: [
      'Algú va trencar l\'armari del pis de cerdanyola',
      'Ens vam quedar sense copes que trencar',
      'Es va trencar un fluorescent per cap d\'any',
      'Molestavem a la Trini',
    ],
    answer: 'Algú va trencar l\'armari del pis de cerdanyola',
    category: 'CANET',
  },
  {
    question: 'Quina és la frase correcte? Al pan pan y al vino vino',
    options: [
      'Y en tu culo mi pepino',
      'Pero a una señora llámala siempre puta',
      'Pero a una puta llámala siempre señora',
      'pero tu madre me come el pito',
    ],
    answer: 'Pero a una puta llámala siempre señora',
    category: 'CANET',
  },
  {
    question: 'Quin d\'aquestes peces no és un horrocrux?',
    options: [
      'Copa de Ravenclaw',
      'Passador del cabell de Slytherin',
      'Basilísco',
      'Totes ho són',
    ],
    answer: 'Copa de Ravenclaw',
    category: 'MEDIA',
  },
  {
    question: "Com es diu el marti de la Pepa de Encanto?",
    options: [
    "Ramiro",
    "Félix",
    "Juan",
    "Camilo"
    ],
    answer: "Félix",
    category: "ENCANTO"
    },
    
    {
    question: "Quina criatura és la que porta més temps vivint a la Tierra Media?",
    options: [
    "Gandalf",
    "El Balrog",
    "Sauron",
    "Tom Bombadil"
    ],
    answer: "Tom Bombadil",
    category: "MEDIA"
    },
    
    {
    question: "Qui tira la papeleta de Harry Potter en el Cáliz de foc?",
    options: [
    "McGonagall",
    "Dumbledore",
    "Harry Potter",
    "Snape"
    ],
    answer: "Dumbledore",
    category: "MEDIA"
  },
  {
    question: "Who is Bruno for Mirabel?",
    options: [
    "Her dad",
    "Her brother",
    "Her cousin",
    "Her uncle"
    ],
    answer: "Her brother",
    category: "ENCANTO"
    },
    
    {
    question: "Which character’s mood affects the weather?",
    options: [
    "Bruno",
    "Pepa",
    "Julieta",
    "Dolores"
    ],
    answer: "Bruno",
    category: "ENCANTO"
    },
    
    {
    question: "What is Luisa’s gift?",
    options: [
    "She can control the weather",
    "She is an amazing cook",
    "She is very graceful",
    "She is very strong"
    ],
    answer: "She is very strong",
    category: "ENCANTO"
    },
    
    {
    question: "Who is Mirabel’s dad?",
    options: [
    "Agustín",
    "Camilo",
    "Mariano",
    "Félix"
    ],
    answer: "Agustín",
    category: "ENCANTO"
    },
    
    {
    question: "Which colour is Dolores’ hair bow?",
    options: [
    "Green",
    "Pink",
    "Red",
    "Yellow"
    ],
    answer: "Green",
    category: "ENCANTO"
    },
    
    {
    question: "Which actress was the voice of Mirabel Madrigal?",
    options: [
    "Stephanie Beatriz",
    "Jessica Darrow",
    "J-Lo",
    "Diane Guerrero"
    ],
    answer: "Stephanie Beatriz",
    category: "ENCANTO"
    },
    
    {
    question: "Which one of the following is not a song from Encanto?",
    options: [
    "Waiting on a Miracle",
    "Surface Pressure",
    "We Don’t Talk about Bruno",
    "Un Baccio a Mezzanotte"
    ],
    answer: "Un Baccio a Mezzanotte",
    category: "ENCANTO"
    },
    
    {
    question: "Who is the ‘theatre kid’?",
    options: [
    "Luisa",
    "Dolores",
    "Camilo",
    "Mirabel"
    ],
    answer: "Mirabel",
    category: "ENCANTO"
    },
    
    {
    question: "When was Encanto released?",
    options: [
    "2019",
    "2020",
    "2021",
    "2022"
    ],
    answer: "2021",
    category: "ENCANTO"
    },
    
    {
    question: "What is Isabela’s magic power?",
    options: [
    "Strength",
    "Control the weather",
    "Control the plants",
    "Precognition"
    ],
    answer: "Control the plants",
    category: "ENCANTO"
    },
    
    {
    question: "What animals were Luisa carrying before singing Surface Pressure?",
    options: [
    "Chickens",
    "Alpacas",
    "Donkeys",
    "Cows"
    ],
    answer: "Alpacas",
    category: "ENCANTO"
    },
    
    {
    question: "What was the name of Alma’s husband?",
    options: [
    "Pablo",
    "Antonio",
    "Pedro",
    "Juan"
    ],
    answer: "Pablo",
    category: "ENCANTO"
    },
    
    {
    question: "Which character is in Bruno’s vision?",
    options: [
    "Luisa",
    "Abuela",
    "Mirabel",
    "Pepa"
    ],
    answer: "Mirabel",
    category: "ENCANTO"
    },
    
    {
    question: "Which insect does Mirabel see in Bruno’s vision?",
    options: [
    "A ladybug",
    "A bee",
    "A firefly",
    "A butterfly"
    ],
    answer: "A ladybug",
    category: "ENCANTO"
    },
    
    {
    question: "Which instrument is Luisa asked to bring to the engagement party?",
    options: [
    "A guitar",
    "An harmonica",
    "A piano",
    "A violin"
    ],
    answer: "A guitar",
    category: "ENCANTO"
    }
];
