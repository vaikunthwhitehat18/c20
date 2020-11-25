var fixedRect,movingRect

function setup(){
createCanvas(800,500);

fixedRect = createSprite(250,250,50,50);
fixedRect.shapeColor="red";
fixedRect.debug = true;

movingRect =createSprite(100,100,50,50);
movingRect.shapeColor="red";
movingRect.debug = true;

}
function draw(){
background(0);

movingRect.x = mouseX;
movingRect.y = mouseY;

if(movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2 &&
    movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2 &&
    fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2){

    fixedRect.shapeColor="blue";
    movingRect.shapeColor="blue"

}else{

    fixedRect.shapeColor="red";
    movingRect.shapeColor="red"

}

drawSprites();

}

