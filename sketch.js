var monkey, monkeyimg;
var bananaimg,stoneimg;
var back, backimg;
var foodgrp,stonegrp;

var score = 0;

var ground;

function preload() {

  monkeyimg = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")

  backimg = loadImage("jungle.png")

  bananaimg = loadImage("banana.png")

  stoneimg = loadImage("stone.png")
}



function setup() {
  createCanvas(800, 400);

  monkey = createSprite(50, 356, 20, 50);
 monkey.addAnimation("Monkey",monkeyimg)
monkey.scale = 0.1
  
ground = createSprite(400, 410, 800, 50);
 
//back = createSprite(0, 200, 800, 400);

 // back.addImage(backimg);
  
  //back.scale = 1.5
  //back.x = back.width/2
  
  //back.velocityX = -4;
  stonegrp = new Group();
  foodgrp = new Group();
}



function draw() {
  background(220);


   ground.visibility = false;
  
//if (back.x < 200){
   // back.x = back.width/2;
  //}


  monkey.collide(ground);

if (foodgrp.isTouching(monkey)) {
     
   foodgrp.destroyEach();
     
     score=score+2;
}
   
 if(keyDown("space")) {
    monkey.velocityY = -6;
  }
  
  
  
  if(stonegrp.isTouching(monkey)){
  
  monkey.scale = 0.1
  }
  
  
  
  
  
  monkey.velocityY = monkey.velocityY + 0.3

spawnBananas();

  spawnStone();
  
  drawSprites();

 text("Score: "+ score, 50,50);
   textSize(40)
}

function spawnBananas() {
  if (frameCount % 80 === 0) {
    var banana = createSprite(380,10,40,10);
    banana.y = Math.round(random(210,280));
    banana.addImage(bananaimg);
    banana.scale = 0.05;
    banana.velocityX = -4;
    
    banana.lifetime = 200;
    
    //back.depth = score.depth;
//score.depth = score.depth + 1;

  //back.depth = banana.depth;
//banana.depth = banana.depth + 1;
    
//back.depth = monkey.depth;
//monkey.depth = monkey.depth + 1;
    
   
    
    foodgrp.add(banana);
  }
  
}
function spawnStone() {
  if (frameCount % 170 === 0) {
    var stone = createSprite(399, 370, 20, 50);
  
    stone.addImage(stoneimg);
    stone.scale = 0.1;
    stone.velocityX = -4;
    
    stone.lifetime = 200;
    
   switch(score){
   
     case 10: monkey.scale = 0.12;
       break;
       
  case 20: monkey.scale = 0.14;
       break;
    
   case 30: monkey.scale = 0.16;
       break;
   
    case 40: monkey.scale = 0.18;
       break;
   
       case 50: monkey.scale = 0.20;
       break;
       
       
       default:break;
       
   
   
   
   
   }
    
   
    
    stonegrp.add(stone);
  }
  
}
