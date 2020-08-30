let rock = document.querySelector("#Rock");
let paper = document.querySelector("#Paper");
let scissor = document.querySelector("#Scissor");
let player = document.querySelector("#player");
let computer = document.querySelector("#computer");
let playerpoint = document.querySelector("#playerpoint");
let computerpoint = document.querySelector("#computerpoint");
let winner = document.querySelector("#winner");
let resetbtn = document.querySelector("#reset");
let start = document.querySelector("#start");
let game = document.querySelector("#game");
let startup = document.querySelector("#startup");


let list = ['rock','paper','scissor'];

let computerText, playercount = 0, computercount = 0;

function logic(x){
  computerText = list[Math.floor(Math.random()*list.length)];
  computer.textContent = computerText;
  if(computerText === x){
    console.log("draw");
  } else if(computerText === list[1] && x === "rock" ){
     computercount++;
     computerpoint.textContent = computercount;
  } else if(computerText === list[2] && x === "rock"){
     playercount++;
     playerpoint.textContent = playercount;
  } else if(computerText === list[0] && x === "paper"){
     playercount++;
     playerpoint.textContent = playercount;
  } else if(computerText === list[2] && x === "paper"){
     computercount++;
     computerpoint.textContent = computercount;
  } else if(computerText === list[0] && x === "scissor"){
    computercount++;
    computerpoint.textContent = computercount;
  } else if(computerText === list[1] && x === "scissor"){
     playercount++;
     playerpoint.textContent = playercount;
  }
  
  if(playercount === 10){
    reset();
    winner.textContent = "You win"; 
    setTimeout(function(){ winner.textContent = ""; }, 1000);
  } else if(computercount === 10){
     reset();
     winner.textContent = "Computer wins"; 
     setTimeout(function(){ winner.textContent = ""; }, 1000);
  }
}

function reset(){
   playercount = "";
   computercount = "";
   player.textContent = "";
   computer.textContent = "";
   playerpoint.textContent = 0;
   computerpoint.textContent = 0;
   winner.textContent = "";
}

resetbtn.addEventListener('click',()=>{
 reset();   
})

rock.addEventListener('click',()=>{
 player.textContent = "rock";
 logic(player.textContent);   
})

paper.addEventListener('click',()=>{
  player.textContent = "paper";
  logic(player.textContent);
})

scissor.addEventListener('click',()=>{
  player.textContent = "scissor";
  logic(player.textContent);
})

start.addEventListener('click',()=>{
  game.style.display = 'block'; 
  startup.style.display = 'none';
})



