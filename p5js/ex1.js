//Variáveis tipo let nomeDaVar;

function setup() { //código que só corre uma vez

  ///Não Apagar para Baixo até <<<
  var canvasDiv = document.getElementById('ex1');
  var width = canvasDiv.offsetWidth;
  var sketchCanvas = createCanvas(width,width*.75);
  console.log(sketchCanvas);
  sketchCanvas.parent('ex1');
  ///<<< Não fica a faltar createCanvas


}

<<<<<<< HEAD
  let posX, posY;
  let velX, velY;
  let padWidth, padHeight;
  let diamBall;
  let points;
  let vel;

  function setup() {
    createCanvas(400, 400);
    posX = random(width);
    posY = 30;
    vel = 5;
    velX = vel;
    velY = vel;
    padWidth = 80;
    padHeight = 8;
    diamBall = 20;
    points=0
  }

  function draw() {
    //desenha
    background( 66, 80, 155);
    textSize(20)
    text(points,20,40);
    posX = posX + velX;
    posY = posY + velY;
       stroke(250)
    fill(66, 80, 155)
    ellipse(posX,posY,diamBall);
     stroke(250)
    fill(66, 80, 155)
    rectMode(CENTER);
    rect(mouseX,height-10,padWidth,padHeight);

    //calcula
    if (posX-diamBall/2 <= 0 || posX+diamBall/2 >= width) {
      velX = velX*-1;
    }
    if (posY-diamBall/2 <= 0) {
      velY = velY*-1;
    }

     stroke(0)
     fill(202, 189, 254 )

    if (posY+diamBall/2 >= height){
      stroke(250)
     fill(0)
      textSize(80);
      text("LOSER",60,200);
      print("LOSER");
      velX = 0;
      velY = 0;
      points = "Game Over";
      stroke(0)
     fill(250)

    }

    if (velX != 0 && posX >= mouseX-padWidth/2 && posX <= mouseX+padWidth/2 && posY+diamBall/2 >= height-10-padHeight/2){
      velY = -random(vel-3,vel);
      velX =random(-vel,vel);
      points++;
    }
  }
=======
function draw() { //código que corre em loop
  background(220); //podem apagar esta linha!

>>>>>>> parent of ccf94f9... Pong

}
