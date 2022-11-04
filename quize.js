const data = [
    {
        id: 1,
        question: "Which of these fish is actually a fish?",
        answers: [
            { answer: "swordfish", isCorrect: true },
            { answer: "jellyfish", isCorrect: false },
            { answer: "starfish", isCorrect: false },
            { answer: "crayfish", isCorrect: false },
        ],
    },
    {
        id: 2,
        question: "A flutter is a group of:",
        answers: [
            { answer: "bees", isCorrect: false },
            { answer: "penguins", isCorrect: false },
            { answer: "butterflies", isCorrect: true },
            { answer: "camels", isCorrect: false },
        ],
    },
    {
        id: 1,
        question: "A group of which animals is referred to as a wake?",
        answers: [
            { answer: "bats", isCorrect: false },
            { answer: "vultures", isCorrect: true },
            { answer: "ants", isCorrect: false },
        ],
    },
];

const gameScreen = document.querySelector(".game")
const rsultScreen = document.querySelector(".result")
const question = document.querySelector(".question")
const answersContainer = document.querySelector(".answers")
const submit = document.querySelector(".submit")
const play = document.querySelector(".play")

let qIndex = 0
let correctCount = 0
let wrongCount = 0
let total = 0
let selectedAnswer

const showResult = () => {
    document.querySelector(".game").style.display = "none"
    document.querySelector(".result").style.display = "block"

    document.querySelector(".result .correct").textContent = `Correct Answers: ${correctCount}`
    document.querySelector(".result .wrong").textContent = `Wrong Answers: ${wrongCount}`
    document.querySelector(".result .score").textContent = `Score: ${correctCount * 10}`
}

const startAgain = () => {
    qIndex = 0
    correctCount = 0
    wrongCount = 0
    total = 0
    // selectedAnswer

    showQuestion(qIndex)

    document.querySelector(".game").style.display = "block"
    document.querySelector(".result").style.display = "none"
}

play.addEventListener("click", () => {
    startAgain()
})

const selectAnswer = () => {
    answersContainer.querySelectorAll("input").forEach(el => {
        el.addEventListener("click", e => {
            selectedAnswer = e.target.value
        })
    })
}


const showQuestion = (qNumber) => {
    console.log(qIndex);
    console.log(data.length);
    if (qIndex === data.length) return showResult()

    selectedAnswer = null
    question.textContent = data[qNumber].question
    answersContainer.innerHTML = data[qNumber].answers.map((ans, i) =>
        `<div class="answer">
            <input type="radio" name="answer" id=${ans.answer} value=${ans.isCorrect}>
            <label for=${ans.answer} >${ans.answer} </label>
        </div>`).join("")

    selectAnswer()
}

showQuestion(qIndex)

const submitAnswer = () => {
    submit.addEventListener("click", () => {
        if (selectedAnswer !== null) {
            selectedAnswer === "true" ? correctCount++ : wrongCount++
            qIndex++
            showQuestion(qIndex)
        } else alert("Please select an answer!")
    })
}

submitAnswer()


