const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var platform;
var ball;
var slingShot;
var polygon;
var gamestate = "onsling";
var score = 0;

function preload(){
  polygon=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  platform = new Stand(390,300,250,10);
 
  //level one
  block1 = new Block(300,275,30,40,color("blue"));
  block2 = new Block(330,275,30,40,color("blue"));
  block3 = new Block(360,275,30,40,color("blue"));
  block4 = new Block(390,275,30,40,color("blue"));
  block5 = new Block(420,275,30,40,color("blue"));
  block6 = new Block(450,275,30,40,color("blue"));
  block7 = new Block(480,275,30,40,color("blue"));
  //level two
  block8 = new Block(330,235,30,40,color("green"));
  block9 = new Block(360,235,30,40,color("green"));
  block10 = new Block(390,235,30,40,color("green"));
  block11 = new Block(420,235,30,40,color("green"));
  block12 = new Block(450,235,30,40,color("green"));
  //level three
  block13 = new Block(360,195,30,40,color("orange"));
  block14 = new Block(390,195,30,40,color("orange"));
  block15 = new Block(420,195,30,40,color("orange"));
  //top
  block16 = new Block(390,155,30,40,color("red"));

  //ball holder with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});

}
function draw() {
  background(56,44,44); 
 
  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  fill("lightgrey");
  text("Launch hexagon by dragging, press space to launch again!",100,30);
  text("Score: "+score,750,40);

  ground.display();
  platform.display();
  strokeWeight(2);
  stroke(15);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  imageMode(CENTER)
  image(polygon ,ball.position.x,ball.position.y,40,40);

  slingShot.display();
}
function mouseDragged(){
  if(gamestate !== "launched") {
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  }
}
function mouseReleased(){
  slingShot.fly();
  gamestate="launched";
}

function keyPressed(){
  if(keyCode === 32){
    gamestate = "onsling";
      slingShot.attach(this.ball);
  }
}