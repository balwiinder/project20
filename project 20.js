var rat,ratimg;
var cat,catimg;
function preload() {
    //load the images here
    ratimg = loadImage("tomOne.png");
    catimg = loadImage("jerryOne.png")
}

function setup(){
    createCanvas(600,600);
    //create tom and jerry sprites here
tom=CreateSprite(200,150,20,20);
tom.addImage(ratimg);
tom.scale=0.3;
cat=CreateSprite(400,300,30,30);
cat.addImage(catimg);
cat.scale=0.4;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
