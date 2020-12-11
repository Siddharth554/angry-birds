class Base
{
    constructor(x,y,w,h,angle)
    {
      this.bodies= Bodies.rectangle(x,y,w,h,{restitution:0.6,friction:1.0,density:1.0});
      World.add(world,this.bodies);
      this.w=w;
      this.h=h;
      this.image=loadImage("sprites/base.png");
     
    }

    visible()
    {
        var pos=this.bodies.position;
        var angle=this.bodies.angle;
         push();
         translate(pos.x,pos.y);
         rotate(angle);
         imageMode(CENTER);
         image(this.image,0,0,this.w,this.h);
         pop();
    }
}
