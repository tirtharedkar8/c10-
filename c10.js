var sea,ship;
var seaImg,shipAnm;

function preload()
{
  seaImg=loadImage("sea.png")
  shipAnm=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup()
{
  createCanvas(400,400);
  background("blue");
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX=-5;
  sea.scale=0.3;

  ship=createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipAnm);
  ship.scale=0.25;
}

function draw()
 {
  background(0);
  sea.velocityX=-5;

  if (sea.x<0) {
    sea.x=sea.width/8;
  }
  drawSprites();
}