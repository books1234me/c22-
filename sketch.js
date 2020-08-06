var movingRect, fixedRect;

function setup() {
createCanvas(800,400);
fixedRect = createSprite(700, 200, 50, 50);
movingRect = createSprite(100,200,70,100);
fixedRect.shapeColor = "orange";
movingRect.shapeColor = "orange";
fixedRect.velocityX = -5;
movingRect.velocityX = 5;
}

function draw() {
  background(255,255,255); 
  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  bounceOff(fixedRect,movingRect);

  drawSprites();
}

