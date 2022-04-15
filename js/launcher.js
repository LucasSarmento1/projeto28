class launcher{
    constructor (body,point){
        var options={
            bodyA:body,
            pointB:point,
            stiffness:0.004,
            length:1
        }
    
        this.bodyA=body;
        this.pointB=point;
        this.launcher=Constraint.create(options);
        World.add(world,this.launcher);

    }
    attach(body){
        this.launcher.bodyA=body;
    }
    fly()
{
    this.launcher.bodyA=null;
}
display(){
    if(this.launcher.bodyA){
        line(this.bodyA.position.x,this.bodyA.position.y,this.pointB.x,this.pointB.y);

    }
}

} 



