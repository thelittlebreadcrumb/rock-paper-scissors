/*
Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. W
We’ll use this function in the game to make the computer’s play.


function computerPlay() {};
// should return either rock paper or scissors.
// this will be used to make the computer's play.

function playRound(playerSelection, computerSelection) {
  // plays a single round of Rock Paper Scissors
  // declares the winner of the round like so: "You Lose! Paper beats Rock"
  // make your function case insensitive (so users can input rock, ROCK, RocK or any other variation). Using the i flag in regex to help us? ("/MICROSOFT/i").
  // make sure we 'return' the results and not .console.log(); the results.
};

function game() {
  playRound(playerSelection, computerSelection);
  // need to count how many games have been won.
}
*/

"use strict"

//Welcome player.
console.log("Welcome to Rock, Paper, Scissors by thelittlebreadcrumb");
console.log("Lets get to know you first. Type name() to tell me your name!");
function getname() {
  let playername = prompt("Whats your name?");
  console.log("Registered player as " + playername + ". Let's go!");
}

// declare variables
let computerscore = 0;
let playerscore = 0;
