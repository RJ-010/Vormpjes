function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  //De cirkel
  circle (50, 100, 70);
  
  //Het vierkantje
  rect(170, 50, 55, 55);

  //Driehoekje
  triangle(200, 200, 170, 260, 230, 260);

  //Het vierkantje met de afgeronde zijden
  rect(250, 150, 60, 60, 20);

  //Het Lijntje
   line(20, 200, 120, 280);
}
