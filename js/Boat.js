class Boat {
    // A) Creamos el constructor, boatPos almecenará posición del barco
    constructor(x, y, width, height, boatPos) {  
  
      //Ba) Agrega las propiedades del cuerpo boat
      var options = {
        restitution : 0.8,
        friction : 1.0,
        density : 1.0
      };
  
      //Bb) Crea el cuerpo Boat con sus propiedades
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
  
      //C) Carga imagen del barco
      this.image = loadImage("./assets/boat.png");
  
      //D) Obtiene posiciones aleatorias desde sketch
      this.boatPosition = boatPos;
      World.add(world, this.body);
    }
  
    display() {
      //E) Obtenemos los ángulos y las posiciones del cuerpo
      var angle = this.body.angle;
      var pos = this.body.position;
       
      //F) push() para guardar la configuración del estilo a la imágen
      push();
  
      //G) Traslada las posiciones del cuerpo a la imágen
      translate(pos.x, pos.y);
  
      //H) Con la función rotate pasamos el ángulo del cuerpo a la imágen
      rotate(angle);
  
      //I) Establece que la imágen está centrada al cuerpo
      imageMode(CENTER);
  
      //J) Agrega la imagen al cuerpo (imagen precargada, X, Y (aleatoria), ancho, alto)
      image(this.image, 0, this.boatPosition, this.width, this.height);
      
      //K) Restablece los estilos de dibujo
      pop();
    }
  }
  