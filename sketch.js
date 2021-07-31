var runner,runnerImg
var path
var road



function preload(){
  //pre-load images
runnerImg=loadAnimation("Runner-1.png","Runner-2.png")
path=loadImage("path.png")       

}

function setup(){
  createCanvas(400,400);
  road= createSprite(200,200,100,100)
  road.addImage(path)
road.velocityY=3

runner= createSprite(200,300,20,20)
runner.addAnimation("boyRunning",runnerImg)
runner.scale=0.1




  //create sprites here
}

function draw() {
  background(0);
  runner.x=World.mouseX
if(road.y>400){
  road.y=height/2
}


 drawSprites() 
}
