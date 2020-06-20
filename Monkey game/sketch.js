//Global Variables
var player,playerrunning;
var bananaImage,bananaGroup;
var obstacle_img,obstaclesGroup;
var ground,groundImage;
var gameOver;
var backImage,backgr;
var score=0;

function preload(){
playerrunning=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
backImage=loadImage("jungle.jpg");

bananaImage=loadImage("Banana.png");

obstacle_img=loadImage("stone.png");
}


function setup() {
  createCanvas(800,400);
  
backgr=createSprite(0,0,800,400);
backgr.addImage(backImage);
backgr.scale=1.5; 
backgr.x=backgr.width/2;
backgr.velocityX= -4;
  
ground=createSprite(400,360,800,20);
ground.visible=false;
ground.x=ground.width/2;
ground.velocityX= -4;
  
player=createSprite(100,350,20,40);
player.addAnimation("running",playerrunning);
player.scale= 0.1
  
bananaGroup = new Group();
  
obstaclesGroup = new Group();
  
score = 0;
}


function draw(){
 background(255);
  


if(ground.x<0) {
ground.x=ground.width/2;
}
  
if(backgr.x<100){
backgr.x=backgr.width/2;
}

if(keyDown("space") ) {
player.velocityY = -12;
}
player.velocityY = player.velocityY + 0.8;
player.collide(ground);
  
switch(score){
  case 10: player.scale=0.12;
          break;
  case 20: player.scale=0.14;
          break;
  case 30: player.scale=0.16;
          break;
  case 40: player.scale=0.18;
          break;
 default: break;
    }
  
if(bananaGroup.isTouching(player)){
bananaGroup.destroyEach();
score = score + 2;
}
  
if(obstaclesGroup.isTouching(player)){ 
player.scale=0.10;
score=score-2;
} 
  
spawnbanana();
spawnObstacles();
  
drawSprites();
  
  stroke("white");
textSize(20);  
fill("white");
text("Score:"+score, 500,50); 

}
function spawnbanana() {
  
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,250,40,10);
    banana.y = random(120,200);    
    banana.addImage(bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -7;
    banana.lifetime = 380;
    player.depth = banana.depth + 1;
    
    bananaGroup.add(banana);
  }
}

function spawnObstacles() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(800,350,10,40);
    obstacle.velocityX = -6;
    obstacle.addImage(obstacle_img);
    
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;

    obstaclesGroup.add(obstacle);
  }
}















