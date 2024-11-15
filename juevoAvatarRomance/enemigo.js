class Enemigo {
    constructor() {
        this.posX = width;
        this.posY = height - 60;
        this.tam = 50;
        this.velocidad = 5;
    }

    dibujar() {
        image(imgE, this.posX, this.posY, this.tam, this.tam);
    }

    avance() {
        this.posX -= this.velocidad;
    }

    fueraDePantalla() {
        return this.posX < -this.tam;
    }
}
