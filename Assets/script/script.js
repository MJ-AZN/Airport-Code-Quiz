//Variables for the code/ call on html elements
const startButton = document.getElementById("start-quiz");
const questionContainerEl = document.getElementById("quiz");

let timer;
let timeRemaining = 60;
let currentQuestionIndex = 0;
let score = 0;

//question arrays
const questions = [
    {
        index: "0",
        question: "What airport serves the Greater Los Angeles?",
        answers: ["SNA", "LAX", "ONT", "LGB"],
        correct: "LAX"
    },
    {
        index: "1",
        question: "Where is DBX?",
        answers: ["Denmark", "Dublin", "Dubai", "Durham"],
        correct: "Dubai"
    },
    {
        index: "2",
        question: "What airport is the busiest in the United States?",
        answers: ["ATL", "JFK!", "LAX", "ORD"],
        correct: "ATL"
    },
    {
        index: "3",
        question: "Which of these airports is closest to central Tokyo?",
        answers: ["KIX", "ITM", "NRT", "HND"],
        correct: "HND"
    },
    {
        index: "4",
        question: "What city does CDG serve?",
        answers: ["Copenhagen", "Frankfurt", "Paris", "Sydney"],
        correct: "Paris"
    }
]

//Actual quiz
startButton.addEventListener("click", startQuiz);

//Starts the quiz
function startQuiz() {
    startButton.classList.add("hide");
    document.getElementById("high-scores").classList.add("hide");
    questionContainerEl.classList.remove("hide");
    startTimer();
    displayQuestion();
}

//Starts the timer
function startTimer() {
    timer = setInterval(function() {
        timeRemaining--;
        document.getElementById("timer").textContent = timeRemaining;

        if (timeRemaining <= 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}

//displayes question.. honestly I named these functions so it would be sort of self explanitory for the experienced programmer
function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;

    const answerButtons = document.querySelectorAll(".btn");
    answerButtons.forEach((button, index) => {
        button.textContent = currentQuestion.answers[index];
        button.onclick = () => selectAnswer(currentQuestion.answers[index]);
    });
}

//Handles user answer selection
function selectAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correct) {
        score++;
    } else {
        timeRemaining -= 15;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

//Ends the quiz when all questions are answered or when time runs out, whatever comes first
function endQuiz() {
    clearInterval(timer);
    document.getElementById("quiz").classList.add("hide");
    document.getElementById("end-screen").classList.remove("hide");
    document.getElementById("final-score").textContent = score;
    displayHighScores();
}

//saves scores to local storage
function saveScore() {
    const initials = document.getElementById("initials").value;
    // Saves the score and initials to local storage
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    highScores.push({ initials, score });
    localStorage.setItem("highScores", JSON.stringify(highScores));
    console.log("Score saved:", initials, score);
}

//High score screen once quiz is finished, have to complete quiz for a second time to see i though.
function displayHighScores() {
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    const highScoresList = document.getElementById("high-scores-list");
    highScoresList.innerHTML = ""; // Clear previous scores

    highScores.forEach(entry => {
        const listItem = document.createElement("li");
        listItem.textContent = `${entry.initials}: ${entry.score}`;
        highScoresList.appendChild(listItem);
    });
}

function goToMainMenu() {
    // "Factory Settings" to restart the quiz
    currentQuestionIndex = 0;
    score = 0;
    timeRemaining = 60;
    document.getElementById("end-screen").classList.add("hide");
    document.getElementById("main-menu").classList.remove("hide");
    document.getElementById("high-scores").classList.remove("hide");
    document.getElementById("quiz").classList.add("hide");
    document.getElementById("start-quiz").classList.remove("hide");
    document.getElementById("timer").textContent = timeRemaining;
}
