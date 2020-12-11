class Birds extends Base
{
    constructor(x,y)
    {
      
      super(x,y,50,50);
      this.image=loadImage("sprites/bird.png");
    }

    visible()
    {
       
        super.visible();
        this.bodies.position.x=mouseX;
        this.bodies.position.y=mouseY;
    }
}
