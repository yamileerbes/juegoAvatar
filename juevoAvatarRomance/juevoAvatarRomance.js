let imgPantallas = [];
let imgP;
let imgE;
let imgC;
let imgBotones = [];
let objJuego;

function preload() {
  imgPantallas =  [ loadImage('data/portada.png'),
    loadImage('data/fondo.png'),
    loadImage('data/creditos.png')];
  imgBotones = [
    loadImage('data/botonJugar.png'),
    loadImage('data/botonCreditos.png'),
      loadImage('data/botonReiniciar.png'),
    loadImage('data/perdiste.png')];
//p de personaje
  imgP =  loadImage('data/personaje.png');
  // e de enemigo
  imgE = loadImage('data/enemigo.png');
  //c de corazon
  imgC = loadImage('data/corazon.png');
}

function setup() {
  createCanvas(640, 480);
  objJuego = new Juego();
}

function draw() {
  objJuego.dibujar();
}

function mousePressed() {
  objJuego.detectarClick(mouseX, mouseY);
}

function keyPressed() {
    if (key === 'd') {
        objJuego.personaje.velocidadX += 5;
    } else if (key === 'a') {
        objJuego.personaje.velocidadX -= 5;
    } else if (key === 'w') {
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
