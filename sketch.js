


const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,box1,pig;


function preload()
{
  background_Img=loadImage("sprites/bg.png"); 
 


}
function setup()
{
   createCanvas(1200,400);
   engine=Engine.create();
   world=engine.world;
   box1=new Box(700,320,70,70);
   box2=new Box(920,320,70,70);
   pig1=new Pig(820,340);
   log1=new Log(810,300,340,PI/2);
 //  x,y,h,angle
   box3=new Box(700,230,70,70);
   box4=new Box(920,230,70,70);
   pig2=new Pig(820,250);
   log2=new Log(810,210,340,PI/2);
   ground=new Ground(600,400,1200,10);

   box5=new Box(820,140,70,70);
 log3=new Log(750,100,140,PI/7);
log4=new Log(900,100,140,-PI/7);

bird=new Birds(100,100);
}

function draw()
{
   background(background_Img);
   Engine.update(engine);
   ground.visible();
   box1.visible();
   box2.visible();
   pig1.visible();
   log1.visible();
   box3.visible();
   box4.visible(); 
   pig2.visible(); 
   log2.visible(); 

   box5.visible();
  log3.visible();
   log4.visible();

   bird.visible();

}
