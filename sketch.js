var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play" 
var gameState = "end"
var spawsdoors
function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
 spookySound = loadSound("spooky.wav");
  
 
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg); 
  tower.velocityY = 1;
  doorsGroup = new Group() 
  climbersGroup = new Group()
  ghost = createSprite( 200,200,50,50)
  ghost.addImage(ghostImg)
  ghost.scale= 0.3
  var message = "this is a message"
  console.log(message)
}


function draw() {
 background(200);
  
   if(tower.y > 400){
      tower.y = 300
    }
    
    spawsdoors()
  drawSprites()
   if(keyDown("left_arrow")){
      ghost.x=ghost.x-3 }

if(keyDown("right_arrow")){
  ghost.x=ghost.x +3
  
  }
  if(keyDown("space")){
 
  ghost.velocityY=-5
   
  }
  ghost.velocityY=ghost.velocityY+0.8
if(climbersGroup.isTouching(ghost)){

ghost.velocityY=0

}

         
  
  


}
function spawsdoors(){


  if (frameCount % 240 === 0) {
 
 
  
  door= createSprite (200,-50)
  door.addImage(doorImg)
  door.velocityY=1;
  climber = createSprite(200,10)
  climber.addImage(climberImg)
  climber.x=door.x
  climber.velocityY=1;
  door. lifetime=800
  climber. lifetime=800
  doorsGroup.add( door)
  climbersGroup.add(climber)
  ghost.depth =door.depth
  ghost.depth +=1
  climber.x=door.x

  invisibleBlock = createSprite(200,5)
  invisibleBlock.depth=climber.depth
  invisibleBlock.velocityY=1
  invisibleBlock.visible=false
 



  }

}




