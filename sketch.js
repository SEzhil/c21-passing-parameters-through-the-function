var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  a = createSprite(100, 200, 50, 80);
  a.shapeColor = "green";
  a.debug = true;
  a.velocityX=5
  b = createSprite(500,200,80,30);
  b.shapeColor = "green";
  b.debug = true;
  b.velocityX=-5
  //c= createSprite(250,200,50,30);


}

function draw() {
  background(0,0,0);  
 // a.x = World.mouseX;
  //a.y = World.mouseY;

  
  /*if(isTouching(a,c))
    {
    a.shapeColor=("red")
    c.shapeColor=("red")
  }
  
  else
  {
    a.shapeColor=("green")
    c.shapeColor=("green")
  
  }*/
  
 /* if(a.x-b.x<a.width/2+b.width/2&&b.x-a.x<a.width/2+b.width/2){
    
    a.velocityX=a.velocityX*(-1)
    b.velocityX=b.velocityX*(-1)
  }
 if( a.y-b.y<a.height/2+b.height/2&&b.y-a.y<a.height/2+b.height/2)
  {
    a.velocityY=a.velocityY*(-1)
    b.velocityY=b.velocityY*(-1)
  }*/
  
  
  bounceOff(a,b);
  drawSprites();
}


