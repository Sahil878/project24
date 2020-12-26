class Dustbin{
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }

        this.body=Bodies.rectangle(x,y,width,height,options,angle)
        this.width=width
        this.height=height

        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position
        var angle = this.body.angle

        push()
       translate(pos.x,pos.y)
       rotate(angle)
       fill(255,0,0)
       pop()
    }

}