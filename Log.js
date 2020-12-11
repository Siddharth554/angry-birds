class Log extends Base
{
    constructor(x,y,h,angle)
    {

        super(x,y,20,h,angle)
       Matter.Body.setAngle(this.bodies,angle);
       this.image=loadImage("sprites/wood2.png");
        
    }    
}
