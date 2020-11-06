var fixecRect,movingRect;
var gameobject1,gameobject2,gameobject3,gameobject4;
function setup() {
  createCanvas(800,400);
 
  fixedRect=createSprite(300, 250, 100, 50);
  fixedRect.shapeColor="blue";
  //fixedRect.debug=true;
  
  gameobject1=createSprite(100,100,50,50);
  gameobject1.shapeColor="yellow";
  gameobject2=createSprite(200,100,50,50);
  gameobject2.shapeColor="yellow";
  gameobject3=createSprite(300,100,50,50);
  gameobject3.shapeColor="yellow";
  gameobject4=createSprite(400,100,50,50);
  gameobject4.shapeColor="yellow";
  
  movingRect=createSprite(200,100,100,50);
  movingRect.shapeColor="blue";
  //movingRect.debug=true;
 
}

function draw() {
  background("black"); 
movingRect.x=World.mouseX;
movingRect.y=World.mouseY;
if(isTouching(movingRect,gameobject2)) {
movingRect.shapeColor = "white";
gameobject2.shapeColor = "white";
}
else 
{
  movingRect.shapeColor = "blue";
  gameobject2.shapeColor = "yellow";
}
drawSprites();
}
function isTouching(object1,object2)
{
  if (object1.x - object2.x < object2.width/2 + object1.width/2
  && object2.x - object1.x < object2.width/2 + object1.width/2
  && object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2) {
 
    return true;
}
else
{
return false;
}
}