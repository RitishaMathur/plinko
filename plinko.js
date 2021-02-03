class Plinko{
    constructor(x,y){
        var bounce={
            restitution:0.3,
            isStatic:false,
            density:1.2,
            friction:0.5
        }
        this.body=Bodies.circle(x,y,10,bounce)
        //ellipseMode(x,y,10,10)
        World.add(world,this.body)
    }
    display(){
        //rectMode(CENTER)
        push();
        var pos = this.body.position;
        ellipseMode(RADIUS)
        fill("white")
        ellipse(pos.x,pos.y,10,10)
        pop();

        
    }
}