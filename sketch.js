
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var ground;
var survivalTime;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  monkey = createSprite(200,500,20,20);
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.15;
  
  ground = createSprite(100,550,600,20);
  ground.velocityX=-12;
  
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  survivalTime = 0;
}


function draw() {
background("white");
  
  if(ground.x<300){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY=-10;
  }
  
  if(obstacleGroup.isTouching(monkey)){
    FoodGroup.setVelocityXEach(0);
    obstacleGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-30);
  }
  
  
  monkey.velocityY = monkey.velocityY +0.8;
  monkey.collide(ground);
  bananas();
  obstacles();
  
   stroke("black");
   textSize(20);
   fill("black");
   survivalTime = survivalTime + Math.round(getFrameRate()/60);
   text("Survival Time: " + survivalTime,20,30);
  
  drawSprites();
}

function bananas(){
  if(frameCount%80 === 0){
    
  banana = createSprite(500,200,20,20);
  banana.addImage(bananaImage);
  banana.velocityX=-6;
  banana.y=Math.round(random(120,200));
  banana.lifetime=200;
  banana.scale=0.15;
    FoodGroup.add(banana);
  }
}

function obstacles(){
  if(frameCount%300 === 0){
    Math.round(random(1,100));
  obstacle = createSprite(400,495,20,20);
  obstacle.addImage(obstacleImage);
  obstacle.velocityX=-6;
  obstacle.lifetime=180;
  obstacle.scale=0.25;
    obstacleGroup.add(obstacle);
  }
}





