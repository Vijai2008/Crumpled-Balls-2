class Box{
    constructor(x, y, width, height) {
        var options = {
           isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image=loadImage("Dust Bin Green.png");
      }
      display(){
        var paperpos=this.body.position
        push();
        translate(paperpos.x,paperpos.y);
        rotate(this.body.angle)
        imageMode(CENTER)
        strokeWeight(3);
        fill(255,0,255)
        image(this.image,0,-this.height/2,this.width,this.height);
        pop();
      }
}