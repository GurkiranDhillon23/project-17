
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400)
  monkey=createSprite(80,300,10,10)
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.2
  
  ground=createSprite(400,360,900,10)
  ground.velocityX=-4
  ground.x=ground.width/2
  console.log(ground.x)
  
  obstacleGroup = new Group();
}


function draw() {
background ("pink")
   if(ground.x<100){
    ground.x=ground.width/2
  }
  if(keyDown("space")){
     monkey.velocityY=-10
     }
  if(ground.x<100){
    ground.x=ground.width/2
  }
  monkey.velocitY = monkey.velocitY + 0.8
  
monkey.collide(ground)
     
spawnObstacles();
  
  drawSprites()
}
function spawnObstacles(){
obstacle=createSprite(400,320,10,10)
obstacle.addImage(obstacleImage)
obstacle.scale=0.2
}





