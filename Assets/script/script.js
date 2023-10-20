const startButton = document.getElementById("main-menu")
const questionContainerEl = document.getElementById("quiz")

startButton.addEventListener("click", startQuiz)

function startQuiz(){
    console.log("You are sane")
    startButton.classList.add("hide")
    quiz.classList.remove("hide")
    setNextQuestion()
}

