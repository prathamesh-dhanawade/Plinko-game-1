const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World



var divisions =[] ;
var plinko = [];
var particles = []
var ground;
var divisionHeight =300;
function setup() {
  
engine = Engine.create()
world= engine.world;
createCanvas(480,800);


ground= new Ground(width/2,height,width,20)
for(var k = 0;k<=width;k=k+80){
divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
}


for(var j = 40;j<=width;j=j+50){
plinko.push(new Plinko(j,75))
}
 
for (var j = 15; j<=width-10;j = j+50){
  plinko.push(new Plinko(j,175))
}

for (var j = 20; j<=width-20;j = j+50){
  plinko.push(new Plinko(j,280))
}

for (var j = 30; j<=width-5;j = j+50){
  plinko.push(new Plinko(j,380))
}




}
function draw() {
 background(0);  
  Engine.update(engine);
  
  if (frameCount%60===0){
    particles.push(new Particle(random(width/2-100, width/2+100),10,10))
    }
  ground.display();

  for(var u = 0; u < particles.length;u++){
    particles[u].display();
  
  }

  for (var i = 0; i < plinko.length; i++) {
     
    plinko[i].display();
    
  }
    
    for(var k = 0;k<divisions.length;k++){
      divisions[k].display();
    
    }


}
