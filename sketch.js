const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles = [];
var plinkos=[];
var divisions=[];
var divisionHeight = 300;

function setup() {
  createCanvas(800,800);
 // createSprite(400, 200, 50, 50);
  engine = Engine.create();
    world = engine.world;
  ground = new Ground(200,795,1200,10);
  for(var k = 0; k<=width;k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  } 
  for (var j = 40;j <=width; j=j+50)
   {
    plinkos.push(new Plinko(j,75));
   }
   for (var j = 15;j <=width-10; j=j+50)
   {
    plinkos.push(new Plinko(j,175));
   }
   for (var j = -10;j <=width-20; j=j+50)
   {
    plinkos.push(new Plinko(j,275));
   }
   for (var j = -35;j <=width-30; j=j+50)
   {
    plinkos.push(new Plinko(j,375));
   }
   
}

function draw() {
  
  background(0); 
  
  ground.display();
  for(var k = 0; k< divisions.length;k++){
    divisions[k].display();
  }
 for(var j = 0; j< plinkos.length;j++)
 {
   plinkos[j].display();
 }
 if (frameCount%60===0){
  particles.push(new Particle(random(width/2-10,width/2+10),10,10))
}
   
 for(var s = 0; s< particles.length;s++)
 {
   particles[s].display();
 }

  drawSprites();
}

