var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;
	
	
  ground=new Ground(600,350,1200,20);
  
  
    ball=new BallClass(200,170,50);
  
    dustbin1=new Dustbin(850,330,200,20)
    dustbin2= new Dustbin(750,290,20,100)
    dustbin3=new Dustbin(950,290,20,100)
    
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  ball.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  fill("blue")
    text("USE ME",830,335)

  drawSprites();
 
}

function keyPressed(){
if(keyCode===UP_ARROW){
  Matter.Body.applyForce(ball.body,ball.body.position,{x:430,y:-430})
}
}


