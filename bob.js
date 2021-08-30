class Bob {
    constructor (x,y,r) {
        var options = {
            restitution: 1.2,
            friction: 0.2,
            density: 3,
        }

        this.body = Bodies.circle(x,y,r/2,options)
        this.radius = r
        World.add(world,this.body)
       
    }

   display() {
       var pos = this.body.position
       push();
       fill(225);
       translate(pos.x,pos.y);
       rotate(this.body.angle);
       ellipseMode(CENTER);
       ellipse(0,0,this.radius, this.radius);
       pop();
   }

}