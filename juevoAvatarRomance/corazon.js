class Corazon {
    constructor() {
        this.posX = width;
        this.posY = 400;
        this.tam = 30;
        this.velocidad = 3;
    }

    dibujar() {
        image(imgC, this.posX, this.posY, this.tam, this.tam);
    }

    avance() {
        this.posX -= this.velocidad;
    }

    fueraDePantalla() {
        return this.posX < 0;
    }
}
