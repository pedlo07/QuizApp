const questions = [
    {
        question: " Na série Stranger Things, qual é o nome do mundo paralelo habitado por criaturas assustadoras? ",
        answers: [
            {text: "O Mundo Invertido", correct: true},
            {text: "O Mundo Desconhecido", correct: false},
            {text: "O Mundo Sombrio", correct: false},
            {text: "O Mundo Alternativo", correct: false},
        ]
    },
    {
        question: " Qual é o nome do personagem principal em One Piece, que está em busca do tesouro conhecido como One Piece? ",
        answers: [
            {text: "Shanks", correct: false},
            {text: "Portgas D. Ace", correct: false},
            {text: "Monkey D. Luffy", correct: true},
            {text: "Shuya Goenji", correct: false},
        ]
    },
    {
        question: " Qual filme dirigido por Christopher Nolan explora a ideia de viagem no tempo e manipulação da mente? ",
        answers: [
            {text: "Inception", correct: false},
            {text: "Interstellar", correct: true},
            {text: "Dunkirk", correct: false},
            {text: "The Prestige", correct: false},
        ]
    },
    {
        question: " Em Toy Story, qual é o nome do cowboy de brinquedo que é o protagonista da história? ",
        answers: [
            {text: "Slinky Dog", correct: false},
            {text: "Buzz Lightyear", correct: false},
            {text: "Mr. Potato Head", correct: false},
            {text: "Woody", correct: true},
        ]
    },
    {
        question: " Qual é o nome do arqueólogo aventureiro interpretado por Harrison Ford em uma famosa franquia de filmes? ",
        answers: [
            {text: "Indiana Jones", correct: true},
            {text: "James Bond", correct: false},
            {text: "Han Solo", correct: false},
            {text: "Luke Skywalker", correct: false},
        ]
    },
    {
        question: " Em O Poderoso Chefão, qual ator interpreta o personagem principal, Michael Corleone? ",
        answers: [
            {text: "Al Pacino", correct: true},
            {text: "Marlon Brando", correct: false},
            {text: "Robert De Niro", correct: false},
            {text: "James Caan", correct: false},
        ]
    },
    {
        question: " Em Akira, qual é o nome do protagonista que desenvolve habilidades psíquicas após um acidente envolvendo uma misteriosa entidade? ",
        answers: [
            {text: "Kaneda Shotaro", correct: false},
            {text: "Akira Takizawa", correct: false},
            {text: "Tetsuo Shima", correct: true},
            {text: "Ryuunosuke Yamaguchi", correct: false},
        ]
    },
    {
        question: " Quem é o autor do mangá Attack on Titan? ",
        answers: [
            {text: "Masashi Kishimoto", correct: false},
            {text: "Hajime Isayama", correct: true},
            {text: "Eiichiro Oda", correct: false},
            {text: "Tite Kubo", correct: false},
        ]
    },
    {
        question: " Qual é o nome do pirata que era conhecido como Barba Branca em One Piece? ",
        answers: [
            {text: "Gol D. Roger", correct: false},
            {text: "Marshall D. Teach", correct: false},
            {text: "Silvers Rayleigh", correct: false},
            {text: "Edward Newgate", correct: true},
        ]
    },
    {
        question: " Qual é o nome do navio de Gol D. Roger em One Piece? ",
        answers: [
            {text: "Red Force", correct: false},
            {text: "Oro Jackson", correct: true},
            {text: "Going Merry", correct: false},
            {text: "Thousand Sunny", correct: false},
        ]
    }
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer (e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Você acertou ${score} das ${questions.length} questões!`;
    nextButton.innerHTML = "Jogar Novamente";
    nextButton.style.display = "block";

}

function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length){
        showQuestion();        
    } else {
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();