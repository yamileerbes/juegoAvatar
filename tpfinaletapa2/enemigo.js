class Enemigo {
  constructor() {
    // posición inicial aleatoria en los bordes
    this.direccion = random([1, -1]); // 1: izquierda a derecha, -1: derecha a izquierda
    if (this.direccion === 1) {
      this.posX = 0; // empieza en el borde izquierdo
    } else {
      this.posX = width; // empieza en el borde derecho
    }
    this.posY = random(height - 150, height - 60); // Zona baja aleatoria
    this.tam = 50;
    this.velocidad = random(3, 10);
    this.colisionado = false;
  }

  dibujar() {
    image(imgE, this.posX, this.posY, this.tam, this.tam);
  }

  avance() {
    this.posX += this.velocidad * this.direccion;
  }

  fueraDePantalla() {
    // fuera de pantalla depende dirección
    if (this.direccion === 1) {
      return this.posX > width + this.tam; // izquierda a derecha
    } else {
      return this.posX < -this.tam; // derecha a izquierda
    }
  }
}
