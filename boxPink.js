class BoxPink {

    constructor(x, y, width, height) {
        var options = {

            isStatic: false,
            restitution: 0.1,
            frictions: 0.01,
            density:0.02,
        this.visibility = 255;
        }

        this.body = Bodies.rectangle(x, y, width, height, options);

        
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display() {
    
        if(this.body.speed<3) {
            super.display();
           }
            
          else{
            World.remove(world,this.body)
          push();
          this.visibility = this.visibility-5;
            tint(255, this.visibility);
            image(this.body.position.x,this.body.position.y,50,50);
            pop();
          }

        var pos = this.body.position;
        strokeWeight(2);
        fill("pink");
        rect(pos.x, pos.y, this.width, this.height);

    }
}