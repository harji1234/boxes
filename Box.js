class Box{
    constructor(x,y,w,h){
        var options={
            restitution:0.8
    
        }
        this.w = w;
        this.h = h;
        this.body=Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body)
        
    }
    display() {
        var pos = this.body.position;
        push ()
        translate(pos.x,pos.y);
        rotate (this.body.angle)
        rectMode(CENTER)
        fill("grey");
        rect(0,0,this.w,this.h);
        pop ();
    }
}