var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(800,400);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50, 200, 50, 30);
  car.shapeColor = "black";
  car.velocityX = speed;

  wall = createSprite(750, 200, 30, 200);
  wall.shapeColor = "gray";

  deformation = 0.5 * weight * speed * speed / 22500;
}

function draw() {
  background("teal"); 
  
  if(car.x - wall.x < car.width/2 + wall.width/2 && 
    wall.x - car.x < car.width/2 + wall.width/2 && deformation < 100){
     car.shapeColor = "green";
     car.velocityX = 0;
    }

  if(car.x - wall.x < car.width/2 + wall.width/2 && 
    wall.x - car.x < car.width/2 + wall.width/2 && deformation > 100 && deformation < 180){
       car.shapeColor = "yellow";
       car.velocityX = 0;
    }

  if(car.x - wall.x < car.width/2 + wall.width/2 && 
    wall.x - car.x < car.width/2 + wall.width/2 && deformation > 180){
     car.shapeColor = "red";
     car.velocityX = 0;
    }      

  
  drawSprites();
}