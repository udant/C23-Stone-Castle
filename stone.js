class stone{
    constructor(x,y,w,h){
        var option={
            restitution:0,
            friction:0
        }
        this.body=Bodies.rectangle(x,y,w,h,option);
        this.w = w; 
        this.h = h;
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("grey");
        rect(pos.x, pos.y, this.w,this.h);
    }
};