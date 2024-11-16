//tengo que reveer los comentarios, reescribirlos
//ajustar posiciones de botones o de texto
//reveer el tiempo o la cantidad de algunas cosas (instrucciones, corazones, puntaje)
//Yamile Nazarena Erbes 94700/7



let imgPantallas = [];
let imgP;
let imgE;
let imgC;
let imgCH;
let imgEH;
let imgBotones = [];
let song, songPlaying = false;
let objJuego;

function preload() {
  song = loadSound('/data/sound.mp3');
  imgPantallas =  [ loadImage('data/portada.png'),
    loadImage('data/fondoJuego.png'),
    loadImage('data/fondoGanaste.png'),
    loadImage('data/fondoPerdiste.png'),
    loadImage('data/creditos.png')];
  imgBotones = [
    loadImage('data/botonJugar.png'),
    loadImage('data/botonCreditos.png'),
    loadImage('data/botonReiniciar.png'),
    loadImage('data/perdiste.png'),
    loadImage('data/botonVolver.png'),
    loadImage('data/ganaste.png')];
  //p de personaje
  imgP =  loadImage('data/personaje.png');
  // e de enemigo
  imgE = loadImage('data/enemigo.png');
  //c de corazon
  imgC = loadImage('data/corazon.png');
  //EH de enemigo hud
  imgEH = loadImage('data/hudEnemigo.png');
  //CH de corazon hud
  imgCH = loadImage('data/hudCorazon.png');
}

function setup() {
  createCanvas(640, 480);
  objJuego = new Juego();
}

function draw() {
  objJuego.dibujar();
}

function mousePressed() {
  if (objJuego && objJuego.detectarClick) {
    objJuego.detectarClick(mouseX, mouseY);
  }
}

function keyPressed() {
    objJuego.keyPressed();
    //se mantienen en el tiempo, durante toda la pantalla juego
  if (key === 'd' ) {
    objJuego.personaje.velocidadX += 5;
   
  } else if (key === 'a' ) {
    objJuego.personaje.velocidadX -= 5;
    
  } else if (key === 'w' ) {
    objJuego.personaje.salto();
  
  }
}

function keyReleased() {
  if (key === 'w') {
    objJuego.personaje.finSalto(); // Detiene el salto prolongado al soltar la tecla
  } else if (key === 'd') {
    objJuego.personaje.velocidadX = 0;
  } else if (key === 'a') {
    objJuego.personaje.velocidadX = 0;
  }
}
