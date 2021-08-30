class Rope{
    constructor(ba,bb,offsetX,offsetY) {
        this.ox = offsetX
        this.oy = offsetY
        var options = {
            bodyA: ba,
            bodyB: bb,
            pointB: {x:this.ox,y: this.oy},
            //stiffness: 0.4,
           // length: 30
        }

        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }

    display() {
        var pointA = this.rope.bodyA.position
        var pointB = this.rope.bodyB.position
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x+this.ox,pointB.y+this.oy);
    }
}