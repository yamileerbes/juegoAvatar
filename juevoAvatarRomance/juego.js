class Juego {
  constructor() {
    this.estado = "inicio";  // Estados: "inicio", "juego", "creditos"
    this.personaje = new Personaje();
    this.enemigos = [];
    this.corazones = [];
    this.timerC = 5;
    this.timerE = 10;
  }

  dibujar() {
    if (this.estado === "inicio") {
      this.dibujarInicio();
    } else if (this.estado === "juego") {
      this.dibujarJuego();
    } else if (this.estado === "creditos") {
      this.dibujarCreditos();
    }
  }

  dibujarInicio() {
    image(imgPantallas[0], 0, 0, width, height);
    image(imgBotones[0], width / 2 - 50, height / 2);
    image(imgBotones[1], width / 2 - 50, height / 2 + 60);
  }

  dibujarJuego() {
    image(imgPantallas[1], 0, 0, width, height);
    this.personaje.mover();
    this.personaje.dibujar();

    // Dibujar enemigos y corazones
    for (let enemigo of this.enemigos) {
      enemigo.dibujar();
      enemigo.avance();
    }
    for (let corazon of this.corazones) {
      corazon.dibujar();
      corazon.avance();
    }

    // Agregar enemigos y corazones cada ciertos frames
    if (frameCount%60 === 0 && this.timerE > 0) {
      this.timerE--;
    }
    if (this.timerE ===0) {
      this.enemigos.push(new Enemigo());
      this.timerE = 5;
    }
    if (frameCount%60 === 0 && this.timerC > 0) {
      this.timerC--;
    }
    if (this.timerC ===0) {
      this.corazones.push(new Corazon());
      this.timerC = 10;
    }
  }

    dibujarCreditos() {
      image(imgPantallas[2], 0, 0, width, height);
      // Puedes agregar más detalles a los créditos si deseas
    }

    detectarClick(x, y) {
      if (this.estado === "inicio") {
        // Detectar clic en el botón Jugar
        if (x > width / 2 - 50 && x < width / 2 + 50 && y > height / 2 && y < height / 2 + 50) {
          this.estado = "juego";
        }
        // Detectar clic en el botón Créditos
        else if (x > width / 2 - 50 && x < width / 2 + 50 && y > height / 2 + 60 && y < height / 2 + 110) {
          this.estado = "creditos";
        }
      }
      else if (this.estado === "creditos") {
        // Volver al inicio si clic en el fondo de créditos
        this.estado = "inicio";
      }
    }
  }
