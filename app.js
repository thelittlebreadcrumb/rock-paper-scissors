/*

I cheated. I needed the help of a video to break things down for me.
While the game logic came easily, actually writing the syntax was the most difficult part.

This file is HEAVILY commented to help myself and others who need to understand what is happening and why.

Table of Contents for the code:

1) Declare variables.
    - Result Heading: Where the move outcome is going to be displayed. As it needs to be accessed
      later, I've given it a variable name of 'resultheading'.
    - Replay: Span tag that contains the replay link to be displayed once the game is over.
    - Moves: Div box of the game controls.
    - playerscore is the variable that will hold the score. We need to have this at 0 to ensure its a new game.
      - playerscore_span is the variable set for the DOM element where the playerscore will be displayed.
    - computerscore is the variable that will hold the score. We need to have this at 0 to ensure its a new game.
      - playerscore_span is the variable set for the DOM element where the playerscore will be displayed.

2) Lets hide the replay button. It is not required at this stage.

3) The 'computer' is only spitting out a decision based on a random number. What we do is put the legal choices in an array.
   Lets call this array of choices... 'choices'. An array item is normally targeted by saying ArrayItem[1]. Arrays start from 0.
   So the only way that we can randomise selection is by getting a random number between 0 - 2 (0, 1, 2). `choices.length` is
   used so that we can extend our list of items without having to count manually how many items there are. This resolves to 3.

   return choices[selectedchoice]; will resolve to return choices[0 or 1 or 2]. The corresponding array item will b  e displayed.

4) function longform(letter) was created to conver 'r', 'p' and 's' into rock, paper and scisssors. depending on what has been feed
   into it, it will spit out the corresponding full form. the letter parameter is derived from the playerchoice and computerchoice.


5) We now create 3 functions.
   - wins()
   - lose()
   - draw()

   for each function, we pass two parameters. playerchoice and computerchoice.
   these are derived from game(playerchoice) where playerchoices comes from the button that was clicked.
   and computerchoice comes from the function of randomly generated options.

   e.g.  wins(playerchoice = 'r', computerchoice = 'p');

6) Once game recieves the parameter 'r', it goes ahead and starts going through a set of switch cases.
   the switch looks for the playerchoice and computerchoice as a joint argument.

   note: computerchoice has been created as a variable that holds the return value from getcomputerchoice().

   cases where 'ps' - scissors trumps and computer wins.
   cases where 'rs' - rock trumps and player wins.

   So cases have been split by winning, losing and draw scenarios.

   If the scenario has reached, run either win(), lose () or draw() functions.

   As said in point 5, we pass the choices to those functions. We don't really have a need for it besides
   getting the letter to simply change it to a full word.

7) Our winning and losing functions also consist the gameover(playerscore, computerscore);
   This is so we can keep a tab of who reaches 5 points.

8) Here lie the click events. If the div is clicked, send us the parameter.

9) gameover function using a basic if statement to query the score. if the score has been reached.
   using the variables that we set up earlier, we now fill in the DOM elements with some text to
   say if they won or lost and as the game has ended, we are going to hide the game controls and only
   display the replay link. the replay ID has inline javascript set up as onclick="reload()";


Thats it!

After writing this long winded explanation of what goes on, I have noticed that arrays and loops are a
part of Web Development 101 \ Fundamentals Part 4. So to all those that used arrays and for statements (incl me),
good try but we've all google'd the living shit out of this excercise. A big thank you to Tenzin Phuljung of whatsdev
on YouTube. His entire Part 2 video is essentially explained here. Only addtional thing that I have added is the gameover
function.

My new goal is to retry this using the basic knowledge that we would have learnt up to this point.
*/




let resultheading = document.querySelector('.intro > h2');
let replay = document.getElementById('replay');
let moves =  document.querySelector('.moves');

let playerscore = 0;
const playerscore_span = document.getElementById('you');
let computerscore = 0;
const computerscore_span = document.getElementById('computer');

replay.style.display = 'none';

function getcomputerchoice() {
  let choices = ['r', 'p', 's'];
  let selectedchoice = Math.floor(Math.random()*(choices.length));
  return choices[selectedchoice];
  alert(choices[selectedchoice]);
}

function longform(letter) {
  if (letter === 's') {
    return "Scissors";
  } else if (letter === 'p') {
    return "Paper";
  } else {
    return "Rock";
  }
}


function wins(playerchoice, computerchoice) {
  playerscore++; // update scores
  playerscore_span.innerHTML = playerscore; // update score board text
  resultheading.innerHTML = longform(playerchoice) + " beats " + longform(computerchoice) + ". You win :)"; // show message
  gameover(playerscore, computerscore); // keep count of scores till game over point.
}

function lose(playerchoice, computerchoice) {
  computerscore++;
  computerscore_span.innerHTML = computerscore;
  resultheading.innerHTML = longform(computerchoice) + " beats " + longform(playerchoice) + ". You lose.";
  gameover(playerscore, computerscore);
}

function draw(playerchoice, computerchoice) {
  console.log("its a draw");
  resultheading.innerHTML = longform(computerchoice) + " equals " + longform(computerchoice) + ". It's a draw.";
}


function game(playerchoice) {
  const computerchoice = getcomputerchoice();

  switch (playerchoice + computerchoice) {
    case "rs":
    case "pr":
    case "sp":
      wins(playerchoice, computerchoice)
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(playerchoice, computerchoice)
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(playerchoice, computerchoice)
      break;
  }
}

// click events
let rock_ele = document.getElementById('rock');
  rock_ele.addEventListener('click', function () {
    game("r"); // r gets sent to game(playerchoice)
  })

let paper_ele = document.getElementById('paper');
  paper_ele.addEventListener('click', function () {
    game("p");
  })

let scissors_ele = document.getElementById('scissors');
  scissors_ele.addEventListener('click', function () {
    game("s");
  })

// we only want to play 5 rounds.
// lets test if the game has reached 5 wins.
// get scores from win(), lose()

function gameover(playerscore, computerscore) {
    if (playerscore === 5) {
      resultheading.innerHTML = "You Won! "
      replay.style.display = 'block'; // show the replay link
      moves.style.display = 'none' // hide the game buttons

    }
    if (computerscore === 5) {
      resultheading.innerHTML = "You Lost! :("
      replay.style.display = 'block'; // show the replay link
      moves.style.display = 'none'; // hide the game buttons

    }
  }

game();
