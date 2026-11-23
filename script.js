// =====================================================================
// Rock Paper Scissors – UI version ("Revisiting Rock Paper Scissors")
// Buttons instead of prompt(), a running score, first to 5 wins.
// =====================================================================

// BASICS: constant
const WINNING_SCORE = 5;

// BASICS: object – what each choice beats
const BEATS = { rock: "scissors", paper: "rock", scissors: "paper" };

// BASICS: array
const CHOICES = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

// BASICS: function
function getComputerChoice() {
  return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

// BASICS: DOM – select elements once
const humanScoreEl = document.getElementById("humanScore");
const computerScoreEl = document.getElementById("computerScore");
const roundResultEl = document.getElementById("roundResult");
const winnerEl = document.getElementById("winner");
const resetBtn = document.getElementById("resetBtn");
const choiceButtons = document.querySelectorAll(".choice");

// BASICS: function – plays one round and updates the page
function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  // BASICS: conditionals
  if (humanChoice === computerChoice) {
    roundResultEl.textContent = `Tie! You both chose ${humanChoice}.`;
  } else if (BEATS[humanChoice] === computerChoice) {
    humanScore++;
    roundResultEl.textContent = `You win this round! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    roundResultEl.textContent = `You lose this round. ${computerChoice} beats ${humanChoice}.`;
  }

  humanScoreEl.textContent = humanScore;
  computerScoreEl.textContent = computerScore;

  if (humanScore === WINNING_SCORE || computerScore === WINNING_SCORE) {
    endGame();
  }
}

function endGame() {
  winnerEl.textContent = humanScore > computerScore ? "🎉 You won the game!" : "💻 The computer won the game.";
  // BASICS: array method – forEach over every button
  choiceButtons.forEach((btn) => { btn.disabled = true; });
  resetBtn.hidden = false;
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  humanScoreEl.textContent = "0";
  computerScoreEl.textContent = "0";
  roundResultEl.textContent = "Pick rock, paper or scissors to start.";
  winnerEl.textContent = "";
  choiceButtons.forEach((btn) => { btn.disabled = false; });
  resetBtn.hidden = true;
}

// BASICS: DOM event listener – one listener per button, using data-choice
choiceButtons.forEach((btn) => {
  btn.addEventListener("click", () => playRound(btn.dataset.choice));
});
resetBtn.addEventListener("click", resetGame);
