const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'red', 'blue', 'green', 'purple', 'orange', 'pink'];
let cards = shuffle(colors.concat(colors));
let selectedCards = [];
let score = 0;
let timeLeft = 30;
let gameInterval;
let isPaused = false;
let gameStarted = false;

const startbtn = document.getElementById('startbtn');
const restartbtn = document.getElementById('restartbtn');
const pausebtn = document.getElementById('pausebtn');
const stopbtn = document.getElementById('stopbtn');
const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');

function generateCards() {
    for (const color of cards) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.color = color;
        card.textContent = '?';
        gameContainer.appendChild(card);
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function handleCardClick(event) {
    if (isPaused || !gameStarted) {
        return;
    }
    const card = event.target;
    if (!card.classList.contains('card') || card.classList.contains('matched')) {
        return;
    }
    card.textContent = card.dataset.color;
    card.style.backgroundColor = card.dataset.color;
    selectedCards.push(card);
    if (selectedCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    const [card1, card2] = selectedCards;
    if (card1.dataset.color === card2.dataset.color) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        score += 2;
        scoreElement.textContent = `Score: ${score}`;
    } else {
        card1.textContent = '?';
        card2.textContent = '?';
        card1.style.backgroundColor = '#ddd';
        card2.style.backgroundColor = '#ddd';
    }
    selectedCards = [];
}

function startGame() {
    score = 0;
    timeLeft = 30;
    isPaused = false;
    gameStarted = true;
    scoreElement.textContent = `Score: ${score}`;
    cards = shuffle(colors.concat(colors));
    selectedCards = [];
    gameContainer.innerHTML = '';
    generateCards();
    gameContainer.addEventListener('click', handleCardClick);
    startTimer();
    startbtn.disabled = true;
}

function startTimer() {
    clearInterval(gameInterval);
    gameInterval = setInterval(() => {
        if (!isPaused) {
            timeLeft--;
            timerElement.textContent = `Time Left: ${timeLeft}`;
            if (timeLeft === 0) {
                clearInterval(gameInterval);
                alert("Game Over!");
                gameStarted = false;
                startbtn.disabled = false;
            }
        }
    },1000);
}

function stopGame(){
    clearInterval(gameInterval);
    gameStarted = false;
    isPaused = false;
    score = 0;
    timeLeft = 30;
    scoreElement.textContent = `Score: ${score}`;
    timerElement.textContent = `Time Left: ${timeLeft}`;
    gameContainer.innerHTML = "";
    startbtn.disabled = false;
    pausebtn.textContent = "Pause";
}

function restartGame() {
    clearInterval(gameInterval);
    startGame();
}

function pauseGame(){
    if(!gameStarted){
        return;
    }
    isPaused = !isPaused;

    if(isPaused){
        pausebtn.textContent = "Resume";
    }
    else{
        pausebtn.textContent = "Pause";
    }
}

startbtn.addEventListener('click', startGame);
restartbtn.addEventListener('click', restartGame);
pausebtn.addEventListener('click', pauseGame);
stopbtn.addEventListener('click', stopGame);

gameContainer.addEventListener('click', handleCardClick);