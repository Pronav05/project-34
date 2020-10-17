//Create variables here
var dog, dogImage
var happyDog
var database
var foodS
var foodStock

function preload()
{
  //load images here
  dogImage = loadImage("images/Dog.png");
  happyDog = loadImage("images/happydog.png");
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250,250,10,10);
  dog.addImage("dog", dogImage);
  dog.scale = 0.5;
  dog.addImage("dog2", happyDog);
  dog.scale = 0.5;

  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    foodS = foodS - 1;
    writeStock(foodS);
    dog.changeImage("dog2", happyDog);
  }

  drawSprites();
  //add styles here
  textSize(12);
  fill("black");
  text(foodS, 20, 20);
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
} 



