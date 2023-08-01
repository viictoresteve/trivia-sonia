export interface Question {
    question: string;
    options: string[];
    answer: string
}

export const questions: Question[] = [
    {
      question: "Favorite childhood memory?",
      options: ["Beach", "Park", "Camping", "Games"],
      answer: "Beach"
    },
    {
      question: "Dream travel destination?",
      options: ["Japan", "Italy", "Australia", "Canada"],
      answer: "Japan"
    },
    {
      question: "Three things you're grateful for?",
      options: ["Family", "Friends", "Health", "Nature"],
      answer: "Family"
    },
    {
      question: "Overcame challenging situation?",
      options: ["Work", "Exams", "Illness", "Moving"],
      answer: "Exams"
    },
    {
      question: "Meet historical figure?",
      options: ["DaVinci", "Einstein", "Curie", "Lincoln"],
      answer: "Curie"
    },
    {
      question: "Joyful hobbies or activities?",
      options: ["Painting", "Reading", "Hiking", "Cooking"],
      answer: "Cooking"
    },
    {
      question: "Influential book, movie, or song?",
      options: ["Alchemist", "Inception", "Imagine", "Pride"],
      answer: "Alchemist"
    },
    {
      question: "Desired special skill or talent?",
      options: ["Languages", "Dancing", "Coding", "Singing"],
      answer: "Singing"
    },
    {
      question: "One-year goal?",
      options: ["Marathon", "Travel", "Promotion", "Learn"],
      answer: "Travel"
    },
    {
      question: "Person with a positive impact?",
      options: ["Sister", "Teacher", "Friend", "Parent"],
      answer: "Sister"
    }
  ];