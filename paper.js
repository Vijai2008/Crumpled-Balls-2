class Paper{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options)
        World.add(world,this.body);
        this.image = loadImage("Crumpled Paper.png");
    }
    display(){
        var paperpos=this.body.position
        push();
        translate(paperpos.x,paperpos.y);
        rotate(this.body.angle)
        imageMode(CENTER)
        strokeWeight(3);
        fill(255,0,255)
        image(this.image,0,this.height/4,this.width,this.height);
        pop();
    }
}
