class Personaje {
  constructor() {
    this.posX = width/2;
    this.posY = height - 100;
    this.tamaño = 70;
    this.velocidadX = 0;
    this.velocidadY = 0;
    this.gravedad = 0.8;
    this.saltando = false;
  }

  dibujar() {
    image(imgP, this.posX, this.posY, this.tamaño, this.tamaño);
  }

  salto() {
    if (this.posY === height - 70) {
      this.velocidadY = -9;  // Velocidad del salto
      this.saltando = true;
    }
  }
  finSalto() {
    this.saltando = false;  // Desactiva el salto prolongado
  }

  mover() {
    // Movimiento horizontal
    this.posX += this.velocidadX;
    this.posX = constrain(this.posX, 0, width - this.tamaño);

    // Movimiento vertical
    this.posY += this.velocidadY;

    // Si estamos en el aire y salto prolongado, incrementa el salto
    if (this.saltando && this.velocidadY < 0) {
      this.velocidadY -= 0.6; // Controla la fuerza del salto prolongado
    }

    this.velocidadY += this.gravedad;

    // Limitar la posición en el suelo
    if (this.posY > height - 70) {
      this.posY = height - 70;
      this.velocidadY = 0;
      this.saltando = false; // Desactiva el salto al tocar el suelo
    }
  }
}
