

#tictactoe
Event Listener Setup
document.addEventListener("DOMContentLoaded", () => { ... }): This ensures the DOM is fully loaded before running the game initialization code.
Element Selection

const boxes = document.querySelectorAll(".box");: Selects all the buttons that represent the game boxes.
const resetButton = document.getElementById("reset");: Selects the button to reset the game.
const newButton = document.getElementById("new-btn");: Selects the button to start a new game after a win or draw.
const messageContainer = document.querySelector(".msg-container");: Selects the message container that displays the win/draw messages.
const message = document.querySelector(".msg");: Selects the message element inside the message container.
Game Variables

let currentPlayer = "X";: Tracks the current player, starting with "X".
let gameActive = true;: Boolean flag to indicate if the game is still active.
const winConditions = [...];: An array of winning conditions, each being a set of indices that form a winning combination.
Game Logic
Box Click Handling

const handleBoxClick = (event) => { ... }: Function that handles clicks on the game boxes.
const box = event.target;: Gets the clicked box.
const boxIndex = Array.from(boxes).indexOf(box);: Determines the index of the clicked box.
If the box is already filled or the game is not active, it returns early.
Sets the content of the box to the current player's symbol ("X" or "O").
Calls checkResult() to determine if the move ends the game.
Switches the current player.
Result Checking

const checkResult = () => { ... }: Function to check if the game has been won or drawn.
Loops through each winning condition and checks if all three boxes in the condition contain the same player's symbol.
If a win is detected, it calls endGame(false).
Checks for a draw by verifying if all boxes are filled.
If a draw is detected, it calls endGame(true).
Game Ending

const endGame = (draw) => { ... }: Function to handle the end of the game.
Sets gameActive to false.
Displays the message container.
Sets the message text to indicate either a win or a draw.
Game Resetting

const resetGame = () => { ... }: Function to reset the game state.
Resets currentPlayer to "X" and gameActive to true.
Clears the content of all boxes.
Hides the message container.
Event Listeners
Box Click Event Listeners

boxes.forEach((box) => box.addEventListener("click", handleBoxClick));: Adds the click event listener to each game box.
Reset Button Event Listeners

resetButton.addEventListener("click", resetGame);: Adds the click event listener to the reset button.
newButton.addEventListener("click", resetGame);: Adds the click event listener to the new game button.
Summary
This code provides the core logic for a Tic Tac Toe game.
It handles player moves, checks for win conditions or draws, and updates the game state accordingly.
It includes functionality to reset the game or start a new game after a win/draw.
