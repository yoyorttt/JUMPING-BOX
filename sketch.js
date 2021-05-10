var canvas;
var music;
var surface1,surface2,surface3,surface4,ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
surface1 = createSprite(width/8,600,180,50);
surface1.shapeColor = "red"

surface2 = createSprite(300,600,180,50);
surface2.shapeColor = "blue"

surface3 = createSprite(500,600,180,50);
surface3.shapeColor = "green"

surface4 = createSprite(700,600,180,50);
surface4.shapeColor = "yellow"

    //create box sprite and give velocity
ball = createSprite(random(20,750),300,30,30);
ball.velocityY = 5;
ball.velocityX = 5;
ball.shapeColor = "white";
}

function draw() {
    background(0);
 
    Edges = createEdgeSprites(800,600);
    ball.bounceOff(Edges);
   // ball.bounceOff(surface1);
  //  ball,bounceOff(surface2);

  fill("white")


drawSprites()
   
   if(surface1.isTouching(ball)||surface4.isTouching(ball)){
    music.play();
   }
    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(ball)&& ball.bounceOff(surface1)){
        ball.shapeColor = "red";
        
    }
    if(surface2.isTouching(ball)&& ball.bounceOff(surface2)){
        ball.shapeColor = "blue"
        
    }
    if(surface3.isTouching(ball)){
        ball.shapeColor = "green"
        music.stop();
        ball.velocityX=0
        ball.velocityY=1
    }

    if(surface3.isTouching(ball)&& frameCount % 60 < 30){
      
        
        
    }
    if(surface4.isTouching(ball)&& ball.bounceOff(surface4)){
        ball.shapeColor = "yellow"
        
    }
 
   
}
