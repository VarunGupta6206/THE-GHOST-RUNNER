var tower,towerIMG;
var door,doorIMG,doorGroup;
var railing,railingIMG,railingGroup;
var Invisibleblock,InvisibleGroup;
var Ghost,GhostIMG;
var gameState="Play";

function preload(){
  towerIMG=loadImage("tower.png");
  doorIMG=loadImage("door.png");
  railingIMG=loadImage("climber.png");
  GhostIMG=loadImage("ghost-jumping.png");
  
}
function setup(){
  createCanvas(600,600);
  tower=createSprite(250,250);
  tower.addImage(towerIMG);
  tower.velocityY=2;
  doorGroup=new Group();
  railingGroup=new Group();
  InvisibleGroup=new Group();
  
  Ghost=createSprite(250,50);
  Ghost.addImage(GhostIMG);
  Ghost.scale=0.3;
  Ghost.velocityY=2;
  
}

function draw(){
background("white");
  if(gameState==="Play"){


  if(tower.y>600){
  tower.y=250; 
   
   }
  if(keyDown("space")){
   Ghost.velocityY=-10;  
     
     }
  Ghost.velocityY=Ghost.velocityY+0.8;

  if(keyDown("left_arrow")){
    Ghost.x = Ghost.x - 3;
  } 
  if(keyDown("right_arrow")){
    Ghost.x = Ghost.x + 3; 
  }
    if(Ghost.isTouching(InvisibleGroup)||Ghost.y>600){
      gameState="End"; 
       
       }
  
  spawnDoors();
  
  drawSprites(); 
  
  } 
  if(gameState==="End"){
   text("GAMEOVER",250,250); 
    
    
    
  }
}
function spawnDoors(){
 if(frameCount%200===0){
   door=createSprite(200,-50);
   door.addImage(doorIMG);
   door.x=random(120,400);
    door.velocityY=2;
    
   railing=createSprite(200,10);
   railing.addImage(railingIMG);
   
   Invisibleblock=createSprite(200,15);
   railing.velocityY=2;
   //Invisibleblock.visible=false;
   Invisibleblock.velocityY=2;
   
   Invisibleblock.width=railing.width;
   Invisibleblock.height=5;
   
   railing.x=door.x
   Invisibleblock.x=door.x
  Invisibleblock.debug=true;
   doorGroup.add(door);
   railingGroup.add(railing);
   InvisibleGroup.add(Invisibleblock);
   
    } 

  
  
  
  
  
  
  
  
  
  
  
}