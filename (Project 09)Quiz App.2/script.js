const quizData = [
  {
    question: "Most populated country in the world is?",
    a: "China",
    b: "India",
    c: "Nigeria",
    d: "Ghana",
    correct: "a",
  },
  {
    question: "What is the most used programming Language in 2021?",
    a: "Ruby",
    b: "Python",
    c: "Javascript",
    d: "Java",
    correct: "b",
  },
  {
    question: "Who is the current president of Nigeria?",
    a: "Donald Trump",
    b: "Muhammadu Buhari",
    c: "Atiku Abubakr",
    d: "Gani Alao",
    correct: "b",
  },
  {
    question: "What does CSS stand for?",
    a: "Computer Science Studies",
    b: "Comrade Salute Song",
    c: "Cascading Style Sheets",
    d: "Cascade Styling Sheets",
    correct: "c",
  },
  {
    question: "What year was Javascript launched?",
    a: "2033",
    b: "2007",
    c: "1995",
    d: "1997",
    correct: "c",
  },
];

const quiz = document.getElementById("quiz");
const answerELs = document.querySelectorAll(".answer");
const questionEL = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEL.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerELs.forEach((answerEL) => {
    if (answerEL.checked) {
      answer = answerEL.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerELs.forEach((answerEL) => {
    answerEL.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You've answered ${score}/${quizData.length} questions.</h2> 
      
      <button onclick="location.reload()">Reload</button>`;
    }
  }
});
