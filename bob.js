class Bob{
    constructor(x,y,d){
        var options = {
            restitution : 1,
            density : 1
        }
        this.body = Bodies.circle(x,y,d/2,options)
        this.d = d
        World.add(world, this.body)
    }
    display(){
        var position = this.body.position
        push()
        translate(position.x, position.y)
        //ellipseMode(RADIUS)
        ellipse(0,0,this.d,this.d)
        pop()
    }
}