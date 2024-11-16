class Instrucciones {
  constructor() {
    this.instrucciones = [
      "Usa 'W' para saltar",
      "Usa 'D' para moverte a la derecha",
      "Usa 'A' para moverte a la izquierda"
    ];
    this.instruccionActual = 0; // Controla cuál instrucción mostrar
    this.mostrarInstruccion = true; // Para controlar si se debe mostrar la instrucción
    this.temporizador = 5; // Temporizador para las instrucciones adicionales
    this.mostrarInstruccionesExtras = false; // Para controlar las instrucciones de obstáculos y corazones
    this.instruccionesExtras = [
      "¡Evita los obstáculos!",
      "¡Agarra los corazones!"
    ];
  }

  mostrar() {
    if (this.mostrarInstruccion) {
      fill(255);
      textSize(24);
      textAlign(CENTER, CENTER);
      text(this.instrucciones[this.instruccionActual], width / 2, height / 2);
    }
    // Mostrar extras si corresponde
    if (this.mostrarInstruccionesExtras) {
      fill(255);
      textSize(24);
      textAlign(CENTER, CENTER);
      text(this.instruccionesExtras[0], width / 2, height / 2 - 100);
      text(this.instruccionesExtras[1], width / 2, height / 2 - 180);
    }
  }

  siguienteInstruccion() {
    if (this.instruccionActual < this.instrucciones.length - 1) {
      this.instruccionActual++; // Avanzar a la siguiente instrucción
    } else {
      this.mostrarInstruccion = false; // Si se completaron todas las instrucciones, esconderlas
      // Iniciar instrucciones extras después de las del teclado
      this.activarInstruccionesExtras();
    }
  }

  activarInstruccionesExtras() {
    if (frameCount%60 === 0 && this.temporizador > 0 ) {
      this.temporizador--;
      this.mostrarInstruccionesExtras = true;
    }
    if (this.temporizador === 0) {
      this.mostrarInstruccionesExtras = false;
      this.temporizador=0;
    }
  }
}
