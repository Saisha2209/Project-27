class Chain{
    constructor(BodyA,BodyB){
        var options={
         bodyA:BodyA,
         bodyB:BodyB,
         stiffness:0.04,
        height:7
        }
        this.chain=Constraint.create(options)
        World.add(world,this.chain)
    }
    display(){
        var pos=this.chain.bodyA.position
        var pos1=this.chain.bodyB.position
        strokeWeight(10)
        line(pos.x,pos.y,pos1.x,pos1.y)
    }
}