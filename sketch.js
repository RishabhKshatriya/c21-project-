var thicness,wall;
var bullet,speed,weight;

function setup() {
createCanvas(1500,400);

   car = createSprite(50, 200, 50, 50);

   wall = createSprite(1200, 200, thicness, height/2);
   wall.shapeColor = "grey";

   speed = random(223,321);
   weight = random(400,1500);
   thicness = random(30,52);
}

function draw() {
  background(0,0,0);

  car.velocityX = speed;

  
  if(hasCollided(bullet,wall)){
    car.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/22509;
  }

  if(damage>10){
car.shapeColor = "red";
  }

  

  if(damage<10){
car.shapeColor = "green";
  }

  hasCollided();

  drawSprites();
}

function hasCollided (lbullet,lwall) {
bulletRightEdge = lbullet.x + lbullet.width;
wallLeftEdge = lwall.x;
if(bulletRightEdge>=wallLeftEdge){
return  true;
}
return false;
}