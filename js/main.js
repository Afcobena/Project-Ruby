// Main solo será para manejo de estados y manipulacion de DOM
// * GLOBAL VARIABLES

// seccion de canvas y ctx
const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");

// elementos de DOM
const splashScreenDOM = document.querySelector("#splash-screen");
const startBtn = document.querySelector("#start-btn");
const gameOverScreenDOM = document.querySelector("#gameover-screen")
const restartBtn = document.querySelector("#restart-btn")

// variables globales del juego
let game; 

// * STATE MANAGEMENT FUNCTIONS

const startGame = () => {
  console.log("intentando inicar el juego");
  splashScreenDOM.style.display = "none";
  gameOverScreenDOM.style.display = "none";

  restartBtn.style.display = "none";
  canvas.style.display = "block";

  
  game = new Game()
  console.log(game)
  game.gameLoop()
};

// * ADD EVENT LISTENERS

startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame)



window.addEventListener("keydown", (event) => {
  if (event.code === "KeyA" || event.code === "ArrowLeft") {
    game.rogueKnight.teclasPress.ArrowLeft = true;
    //modeficar los buleanos a verdadero
  } 
  if (event.code === "KeyD" || event.code === "ArrowRight") {
    game.rogueKnight.teclasPress.ArrowRight = true;

  } 
  if (event.code === "KeyW" || event.code === "ArrowUp") {
    game.rogueKnight.teclasPress.ArrowUp = true; 

  } 
  if (event.code === "KeyS" || event.code === "ArrowDown") {
    game.rogueKnight.teclasPress.ArrowDown = true; 
  }


})

window.addEventListener("keyup", (event) => {
  if (event.code === "KeyA" || event.code === "ArrowLeft") {
    game.rogueKnight.teclasPress.ArrowLeft = false;
    //modeficar los buleanos a verdadero
  } 
  if (event.code === "KeyD" || event.code === "ArrowRight") {
    game.rogueKnight.teclasPress.ArrowRight = false;

  } 
  if (event.code === "KeyW" || event.code === "ArrowUp") {
    game.rogueKnight.teclasPress.ArrowUp = false; 

  } 
  if (event.code === "KeyS" || event.code === "ArrowDown") {
    game.rogueKnight.teclasPress.ArrowDown = false; 
  }


})


window.addEventListener("keydown", (event) => {
  if (event.code === "KeyZ") {
    // aqui muevo al Champion a la izquierda
    game.spear.spearMovement();
    //modeficar los buleanos a verdadero
  }
})