const questionsArray = [
  {
    question: "In The Matrix, what was the color of pill that Neo took?",
    answers: [
      { answer: "blue", isCorrect: false },
      { answer: "white", isCorrect: false },
      { answer: "red", isCorrect: true },
      { answer: "green", isCorrect: false },
    ],
  },
  {
    question:
      'In what 1976 thriller does Robert De Niro famously say "You talkin to me"?',
    answers: [
      { answer: "Goodfellas", isCorrect: false },
      { answer: "Taxi Driver", isCorrect: true },
      { answer: "The Godfather Part II", isCorrect: false },
      { answer: "Heat", isCorrect: false },
    ],
  },
  {
    question:
      "Aaron Sorkin won an Oscar for writing what 2010 drama about the creation of Facebook?",
    answers: [
      { answer: "Molly's Game", isCorrect: false },
      { answer: "Moneyball", isCorrect: false },
      { answer: "The Farnsworth Invention", isCorrect: false },
      { answer: "The Social Network", isCorrect: true },
    ],
  },
  {
    question:
      "The Battle of Thermopylae served as the basis of what highly stylized 2006 smash hit swords-and-sandals action flick?",
    answers: [
      { answer: "Sparta", isCorrect: false },
      { answer: "300", isCorrect: true },
      { answer: "Troy", isCorrect: false },
      { answer: "Alexander", isCorrect: false },
    ],
  },
  {
    question:
      "Who is the only actor to receive an Oscar nomination for acting in a Lord of the Rings movie?",
    answers: [
      { answer: "Elijah Wood", isCorrect: false },
      { answer: "Orlando Bloom", isCorrect: false },
      { answer: "Ian McKellen", isCorrect: true },
      { answer: "Viggo Mortensen", isCorrect: false },
    ],
  },
  {
    question: "What is the highest-grossing R-rated movie of all time?",
    answers: [
      { answer: "Deadpool", isCorrect: false },
      { answer: "Joker", isCorrect: true },
      { answer: "Logan", isCorrect: false },
      { answer: "The Matrix", isCorrect: false },
    ],
  },
  {
    question:
      "What Martin Scorsese movie holds the all-time record for F-bombs?",
    answers: [
      { answer: "The Irishman", isCorrect: false },
      { answer: "The Wolf of Wall Street", isCorrect: true },
      { answer: "Goodfellas", isCorrect: false },
      { answer: "The Departed", isCorrect: false },
    ],
  },
  {
    question: "Who wrote the screenplay for Rocky?",
    answers: [
      { answer: "Woody Allen", isCorrect: false },
      { answer: "Quentin Tarantino", isCorrect: false },
      { answer: "Sylvester Stallone", isCorrect: true },
      { answer: "Francis Ford", isCorrect: false },
    ],
  },
  {
    question:
      "In The Legend Of Tarzan, Alexander Skarsgård is Tarzan, but who is Jane?",
    answers: [
      { answer: "Dakota Fanning", isCorrect: false },
      { answer: "Scarlett Johansson", isCorrect: false },
      { answer: "Jennifer Lawrence", isCorrect: false },
      { answer: "Margot Robbie", isCorrect: true },
    ],
  },
  {
    question: "How many members of the Fellowship of the Ring are there?",
    answers: [
      { answer: "7", isCorrect: false },
      { answer: "10", isCorrect: false },
      { answer: "9", isCorrect: true },
      { answer: "12", isCorrect: false },
    ],
  },
  {
    question: "Mowgli was raised by what kind of animals in The Jungle Book?",
    answers: [
      { answer: "wolves", isCorrect: true },
      { answer: "bears", isCorrect: false },
      { answer: "monkeys", isCorrect: false },
      { answer: "tigers", isCorrect: false },
    ],
  },
  {
    question: "What does Hakuna Matata mean?",
    answers: [
      { answer: "Friends forever", isCorrect: false },
      { answer: "Good luck", isCorrect: false },
      { answer: "Have a nice day", isCorrect: false },
      { answer: "No worries", isCorrect: true },
    ],
  },
  {
    question:
      'What number in the "Fast and Furious" series of films premiered in 2011?',
    answers: [
      { answer: "3", isCorrect: false },
      { answer: "5", isCorrect: true },
      { answer: "2", isCorrect: false },
      { answer: "4", isCorrect: false },
    ],
  },
  {
    question:
      'In "The Hunger Games: Catching Fire", in Katniss\'s interview with Caesar Flickerman, what does she wear?',
    answers: [
      { answer: "Skirt", isCorrect: false },
      { answer: "Jumpsuit", isCorrect: false },
      { answer: "Wedding Dress", isCorrect: true },
      { answer: "Jeans", isCorrect: false },
    ],
  },
  {
    question: 'What was the 2007 movie "Ghost Rider" based on?',
    answers: [
      { answer: "DC Comics", isCorrect: false },
      { answer: "Marvel Comics", isCorrect: true },
      { answer: "Dark Horse Comics", isCorrect: false },
      { answer: "Image Comics", isCorrect: false },
    ],
  },
  {
    question: 'What band is the film "Bohemian Rhapsody" about?',
    answers: [
      { answer: "Queen", isCorrect: true },
      { answer: "Aerosmith", isCorrect: false },
      { answer: "The Rolling Stones", isCorrect: false },
      { answer: "Guns N' Roses", isCorrect: false },
    ],
  },
  {
    question:
      'Where does Captain Jack get trapped in the 2007 film "Pirates of the Caribbean: At World\'s End"?',
    answers: [
      { answer: "Port Royal", isCorrect: false },
      { answer: "Singapore", isCorrect: false },
      { answer: "Tortuga", isCorrect: false },
      { answer: "Davy Jones' Locker", isCorrect: true },
    ],
  },
  {
    question:
      "In 2008's \"Twilight\", where does Bella's mother move with her new husband after Bella moves to Fork?",
    answers: [
      { answer: "Mystic Falls, GO", isCorrect: false },
      { answer: "Jacksonville, FL", isCorrect: true },
      { answer: "Westwood, LA", isCorrect: false },
      { answer: "Beacon Hills, CA", isCorrect: false },
    ],
  },
  {
    question: 'Who does Shrek, in the movie "Shrek", fall in love with?',
    answers: [
      { answer: "Princess Fiona", isCorrect: true },
      { answer: "Doris", isCorrect: false },
      { answer: "Lillian", isCorrect: false },
      { answer: "Rapunzel", isCorrect: false },
    ],
  },
  {
    question:
      'What lead actor stars in the "Mission: Impossible" movie series?',
    answers: [
      { answer: "Henry Cavill", isCorrect: false },
      { answer: "Ryan Gosling", isCorrect: false },
      { answer: "Tom Cruise", isCorrect: true },
      { answer: "Ryan Reynolds", isCorrect: false },
    ],
  },
];

const shuffle = (array) => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array.slice(0, 10);
};
const questions = shuffle(questionsArray);

export { questions, shuffle };
