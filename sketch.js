var player, target;
var score = 5;

function preload(){

}

function setup() {
  createCanvas(1200,800);
  


  target = createSprite(Math.round(random(200,1000)),Math.round(random(200,600)),50,50); 
  
  
}

function draw() {
  background("cyan"); 

  textSize(20); 
  text("Score =" + score,500,100);

  if(target.x >1200) {
    score = 0;
  }

  if(target.x < 0) {
    score = 0;
  }

  if(target.y > 800) {
    score = 0;
  }

  if(target.y < 0) {
    score = 0;
  }

  if(score < 1) {
    textSize(30); 
    text("You LOSE because you're bad",350,150); 
  } 

  if(mouseX - target.x <= 75 && mouseX - target.x >= 0
    && mouseY - target.y <= 25 && mouseY - target.y >= -25 && score > 1) {
    target.velocityX = Math.round(random(-10,0))
  }

  if(mouseX - target.x >= -75 && mouseX - target.x <= 0
    && mouseY - target.y <= 25 && mouseY- target.y >= -25 && score > 1) {
    target.velocityX = Math.round(random(0,10))
  }

  if(mouseY - target.y <= 75 && mouseY - target.y >= 0
    && mouseX - target.x <= 25 && mouseX - target.x >= -25 && score > 1) {
    target.velocityY = Math.round(random(-10,0))
  }

  if(mouseY - target.y >= -75 && mouseY - target.y <= 0
    && mouseX - target.x <= 25 && mouseX - target.x >= -25 && score > 1) {
    target.velocityY = Math.round(random(0,10))
  }

   if(mouseY - target.y <= 50 && mouseY - target.y >= 25
    && mouseX - target.x <= 50 && mouseX - target.x >= 25 && score > 1) {
     target.velocityX = -5;
     target.velocityY = -5;
   }

   if(mouseY - target.y <= 50 && mouseY - target.y >= 25
    && mouseX - target.x >= -50 && mouseX - target.x <= 25 && score > 1) {
     target.velocityX = 5;
     target.velocityY = -5;
   }

   if(mouseY - target.y >= -50 && mouseY - target.y <= 25
    && mouseX - target.x <= 50 && mouseX - target.x >= 25 && score > 1) {
     target.velocityX = -5;
     target.velocityY = 5;
   }

   if(mouseY - target.y >= -50 && mouseY - target.y <= 25
    && mouseX - target.x >= -50 && mouseX - target.x <= 25 && score > 1) {
     target.velocityX = 5;
     target.velocityY = 5;
   }

   if(frameCount % 10 === 0) {
     score = score + 1;
   }

  drawSprites();
}