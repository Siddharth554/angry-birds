class Ground
{
    constructor(x,y,w,h)
    {
        this.bodies=Bodies.rectangle(x,y,w,h,{isStatic:true});
        World.add(world,this.bodies);
        this.w=w;
        this.h=h;
    }

    visible()
    {
        var pos=this.bodies.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x,pos.y,this.w,this.h);
       
    }
}
