const startButton = document.getElementById("main-menu")
const questionContainerEl = document.getElementById("quiz")

startButton.addEventListener("click", startQuiz)

function startQuiz(){
    console.log("You are sane")
    startButton.classList.add("hide")
    quiz.classList.remove("hide")
    nextQuestion()
}

function nextQuestion(){

}

function selectAnswer(){

}

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