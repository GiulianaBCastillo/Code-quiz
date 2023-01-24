const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
let shuffledQuestions, currentQuestionIndex
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
console.log('Started')
startButton.classList.add('hide')
shuffledQuestions = questions.sort(() => Math.random() - .5)
questionContainerElement.classList.remove('hide')
currentQuestionIndex = 0
setNextQuestion()
}

function setNextQuestion () {
 resetState()
 showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
 questionElement.innerText = question.question
 question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click, selectAnswer')
    answerButtonsElement.appendChild(button)
 });
}

function resetState() {
nextButton.classList.add('hide')
while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
}
}
function selectAnswer(e) {
 const selectedButton = e.target
 const correct = selectedButton.dataset.correct
 setStatusClass(document.body, correct)
 Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass (button, button.dataset.correct)
 })
 if (shuffledQuestions.lenght > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
 } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
 }
 
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    lement.classList.remove('wrong')
}
const questions = [
{
    question: 'How do you call a list of items in Javascript?',
    answers: [
        { text: 'Array', correct: true },
        { text: 'Function', correct: false},
        { text: 'Input', correct: false},
        { text: 'Dataset', correct: false}
    ]
},
{
    question: 'What is an object in Javascript?',
    answers: [
        { text: 'A collection of properties, and a property is an association between a name (or key) and a value.', correct: true },
        { text: ' Is a block of code designed to perform a particular task.', correct: false },
        { text: ' An object is a buleon.', correct: false },
        { text: ' None of the above.', correct: false }
    ]

}
]