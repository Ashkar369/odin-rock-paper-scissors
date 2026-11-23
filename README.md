# Rock Paper Scissors – The Odin Project

My Rock Paper Scissors project for **The Odin Project Foundations – JavaScript Basics**, built with plain HTML, CSS and JavaScript.

- **Button version (live):** https://ashkar369.github.io/odin-rock-paper-scissors/
- **Console version (live):** https://ashkar369.github.io/odin-rock-paper-scissors/console.html
- **Author:** Ashkar Siyad – Web Technologies, Riga Nordic University

## 1. Console version (`console.js`)
Open the console, then click **Start** or type `playGame()`.

| Function | What it does |
|---|---|
| `getComputerChoice()` | `Math.floor(Math.random() * 3)` → 0, 1 or 2, then `if / else if / else` turns the number into rock, paper or scissors |
| `getHumanChoice()` | `prompt()`, then `trim().toLowerCase()` so "ROCK" also works |
| `playRound(human, computer)` | Compares the two choices with `&&` / `\|\|`, updates the score and logs the result |
| `playGame()` | Keeps `humanScore` and `computerScore`, runs a **`for` loop** for 5 rounds, and announces the winner |

`playRound` is declared **inside** `playGame`, so it can change the scores (**scope**).

## 2. Button version (`script.js`), from the "Revisiting Rock Paper Scissors" lesson
- Three buttons replace `prompt()`. Each has a `data-choice` attribute.
- A `BEATS` **object** (`{ rock: "scissors", ... }`) replaces a long list of if-statements.
- A running score is shown on the page with `textContent`.
- The first player to **5 points** wins. The buttons are then disabled and a **Play again** button appears.

## Concepts used
Search the code for `BASICS:` to find each one.
Variables (`let`/`const`) · functions · conditionals · logical operators · the ternary operator · `for` loops · arrays · objects · string methods · `Math.random` · DOM selection · `addEventListener` · `forEach` · `data-*` attributes.
