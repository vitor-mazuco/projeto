var ship ;
var sea;
function preload(){
  ship = loadAnimation("ship-1.png,ship-2.png,ship-3.png,ship-4.png");

  addAnimation("ship", ship );
 sea = loadAnimation("sea.png") ;
}


function setup(){
  createCanvas(400,400);
  addAnimation("ship", ship );
}

function draw() {
  background("blue");
    drawSprites();

 
}
