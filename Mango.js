class Mango{
    constructor(x,y,r){
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1
        }
       
        this.image = loadImage("Images/mango.png")
        this.body = Bodies.circle(x, y, r, options)
        this.r = r;
        World.add(world, this.body)
    }
    display(){
        imageMode("CENTER")
        image(this.image,this.body.position.x, this.body.position.y, this.r*2, this.r*2)
    }
}
