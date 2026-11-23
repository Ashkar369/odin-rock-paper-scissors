// =====================================================================
// Rock Paper Scissors – CONSOLE version (step 1 of the Odin project)
// Open the DevTools console (Cmd + Option + J) and type:  playGame()
// =====================================================================

// BASICS: function – returns "rock", "paper" or "scissors" at random
function getComputerChoice() {
  // BASICS: Math.random() gives 0 ≤ n < 1, Math.floor rounds down → 0, 1 or 2
  const n = Math.floor(Math.random() * 3);
  // BASICS: conditionals (if / else if / else)
  if (n === 0) return "rock";
  else if (n === 1) return "paper";
  else return "scissors";
}

// BASICS: function – asks the user with prompt()
function getHumanChoice() {
  // BASICS: string method – toLowerCase() makes "ROCK" and "Rock" work too
  const answer = prompt("Rock, paper or scissors?");
  return answer === null ? "" : answer.trim().toLowerCase();
}

function playGame() {
  // BASICS: variables – let because the scores change
  let humanScore = 0;
  let computerScore = 0;

  // playRound is declared INSIDE playGame so it can update the scores (scope)
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log(`Tie! You both chose ${humanChoice}.`);
      return;
    }
    // BASICS: logical operators (&& and ||)
    const humanWins =
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper");

    if (humanWins) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }
  }

  // BASICS: loop – 5 rounds
  for (let round = 1; round <= 5; round++) {
    console.log(`--- Round ${round} ---`);
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Score – You: ${humanScore}  Computer: ${computerScore}`);
  }

  // BASICS: ternary operator for the final message
  const result =
    humanScore === computerScore ? "It's a draw!" :
    humanScore > computerScore ? "You won the game! 🎉" : "The computer won the game.";
  console.log(result);
  return result;
}

document.getElementById("startBtn").addEventListener("click", playGame);
