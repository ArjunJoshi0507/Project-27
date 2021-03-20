class Rope{
    constructor(body1,body2,xoffset,yoffset){
        this.xoffset = xoffset
        this.yoffset = yoffset

        var options = {
            bodyA : body1,
            bodyB : body2,   
        }
        this.body = Matter.Constraint.create(options)
        World.add(world,this.body)
    }
display(){
    var pointA = this.body.bodyA.position
    var pointB = this.body.bodyB.position
    strokeWeight(2)
    line(pointA.x, pointA.y, pointB.x+this.xoffset,pointB.y+this.yoffset)
}
}