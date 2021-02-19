class Block{
    constructor(x, y, width, height, color) {
        this.Visiblity = 255;
        var options = {
            restitution :0.4,
            friction :0.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.color=color;
        World.add(world, this.body);
      }
      display(){
        fill(this.color);
        if(this.body.speed<3 && this.Visiblity>0){
        var angle=this.body.angle;
        var pos=this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
         }
         else if(this.Visiblity>0) {
           World.remove(world,this.body);
           push();
           this.Visiblity = this.Visiblity - 5;
           this.color.setAlpha(this.Visiblity);
           tint(255,this.Visiblity);
           rectMode(CENTER);
           rect(this.body.position.x, this.body.position.y,this.width, this.height);
           pop();
           console.log(this.Visiblity);
         }
      }

      score() {
        if(this.Visiblity>0 && this.Visiblity>-1005) {
          score+25;
        }
      }
}