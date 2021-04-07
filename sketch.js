
var backgroundImage;
var background;
var bow,bow_mouseY,edges;

var pink_balloonImage;
var pink_balloon;

var blue_balloonImage;
var blue_balloon;

var red_balloonImage;
var red_balloon;



function preload(){
 //load your images here 
 bow_mouseY=loadImage("bow0.png")
  backgroundImage=loadImage("background0.png");

  pink_balloonImage=loadImage("pink_balloon0.png");
  blue_balloonImage=loadImage("blue_balloon0.png");
  red_balloonImage=loadImage("red_balloon0.png");

}

function setup() {
  createCanvas(400, 400);
  
  
  background=createSprite(200,200,100,200)
  background.addImage("background",backgroundImage)
  
  bow=createSprite(300,300,30,30)
  bow.addImage("mouseY",bow_mouseY);
  
    for (var i = 60; i < 500; i=i+60) 
{
   pink_balloon = createSprite(60, i, 20, 20);
   pink_balloon.addImage(pink_balloonImage)
  pink_balloon.scale=1.5;
} 
      for (var i = 60; i < 400; i=i+60) 
{
  blue_balloon = createSprite(120, i, 20, 20);
   blue_balloon.addImage(blue_balloonImage)
  blue_balloon.scale=0.1
}
  
      for (var i = 60; i < 300; i=i+60) ;
{
   red_balloon = createSprite(180, i, 20, 20);
   red_balloon.addImage(red_balloonImage)
  red_balloon.scale=0.1
  
  
}

  
  
  bow.x=350;
  bow.y=250;
  //add code here
  
}

function draw() {
bow.y= World.mouseY;
  

  
 background=("white")
  //add code here
 
  drawSprites();
}

