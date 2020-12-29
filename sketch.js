
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	tree_img = loadImage("Images/tree.png")
	boy_img = loadImage("Images/boy.png")
}

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = new Stone(180, 450, 25)
	constraint = new SlingShot(stone.body, {x:140, y:410})
	ground = new Ground(600, 590, 1200, 20)

	mango1 = new Mango(900,300,25)
	mango2 = new Mango(850,200,25)
    mango3 = new Mango(1000,250,25)
    mango4 = new Mango(790,290,25)
    mango5 = new Mango(1050,280,25)
    mango6 = new Mango(950,260,25)
    mango7 = new Mango(1100,300,25)
    mango8 = new Mango(790,200,25)
    mango9 = new Mango(770,220,25)
    mango10 = new Mango(1020,260,25)
    mango11 = new Mango(805,235,25)

	Engine.run(engine);
  
}


function draw() {
  background(235, 235, 224);
  imageMode(CENTER);
  image(tree_img, 900, 355, 500,500)
  image(boy_img, 200, 510, 200, 300)
  detectCollision(mango1,stone)
  detectCollision(mango2,stone)
  detectCollision(mango3,stone)
  detectCollision(mango4,stone)
  detectCollision(mango5,stone)
  detectCollision(mango6,stone)
  detectCollision(mango7,stone)
  detectCollision(mango8,stone)
  detectCollision(mango9,stone)
  detectCollision(mango10,stone)
  detectCollision(mango11,stone)
  ground.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()
  mango10.display()
  mango11.display()
  
  stone.display()
  constraint.display()
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
	constraint.fly()
}

function detectCollision(object1, object2){
	var distance=dist(object1.body.position.x,object1.body.position.y,object2.body.position.x,object2.body.position.y)
	
	if(distance<=object1.r+object2.r){
	Matter.Body.setStatic(object1.body,false);
}
}

function keyPressed(){
  if(keyCode === 32){
    constraint.attach(stone.body)
  }
}

