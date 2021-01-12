var car, wall
var speed, weight
var deformation


function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);

  //speed = random(50,100)
 // weight = random(400,1500)

  //deformation = 0.5*weight*speed*speed/22500


  
  car = createSprite(50,200,50,50)
  car.shapeColor("red")
  wall = createSprite(1500,200,60,30)
}
function draw() {
  background("black");  
  
  
  
  
  
  
  drawSprites();


}