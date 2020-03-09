class Hurdle {
    constructor(x, y, height, width, color) {
        this.bottom = y;
        this.left = x;
        this.height = height;
        this.width = width;
        this.color = color;
        this.addHurdle(); 
    }
    addHurdle(){
        console.log(this.bottom,this.left,this.height,this.width,this.color);
        $('body').append ("<div class='hurdle' style='bottom:" + this.bottom + "px; left:" + this.left + "px; height: " + this.height + "px; width:" + this.width + "px; background-color:" + this.color + "'></div>");        
   
    }

        
}

class Runner {
    constructor(x, y, height, width, color) {
        this.bottom = y;
        this.left = x;
        this.height = height;
        this.width = width;
        this.color = color;
        this.addRunner();
        this.speed = 50;
        //this.bounce();
        this.id = "runner" + $(".runner").length;
        this.move();
        this.collision();
        this.collision2();
        this.collision3();
        this.collision4();

    }

    collision(){
        return this.left+this.width >= Hurdle1.left &&
        this.left <= Hurdle1.left+Hurdle1.width &&
        this.bottom <= Hurdle1.bottom+Hurdle1.height &&
        this.bottom+this.height >= Hurdle1.bottom;

    }

    collision2(){
        return this.left+this.width >= Hurdle2.left &&
        this.left <= Hurdle2.left+Hurdle2.width &&
        this.bottom <= Hurdle2.bottom+Hurdle2.height &&
        this.bottom+this.height >= Hurdle2.bottom;

    }

    collision3(){
        return this.left+this.width >= Hurdle3.left &&
        this.left <= Hurdle3.left+Hurdle3.width &&
        this.bottom <= Hurdle3.bottom+Hurdle3.height &&
        this.bottom+this.height >= Hurdle3.bottom;

    }

    collision4(){
        return this.left+this.width >= Hurdle4.left &&
        this.left <= Hurdle4.left+Hurdle4.width &&
        this.bottom <= Hurdle4.bottom+Hurdle4.height &&
        this.bottom+this.height >= Hurdle4.bottom;

    }

    bounce(){
    gsap.to(".runner", {duration: 5,y:-200, x: 0, transform:-200});

    }

    move(direction){

    if (direction == '37') { //down arrow key 
        this.left -= runner.speed;
        $(".runner").finish().animate({ 
            left: this.left 
            
        }); 
        console.log (this.bottom)
    } 
 
    if (direction == '38') { //down arrow key 
        this.bottom += runner.speed;
        $(".runner").finish().animate({ 
            bottom: this.bottom
        }); 
        
    } 
    
 
    if (direction == '39') { //right arrow key 
        this.left += runner.speed;
        $(".runner").finish().animate({ 
            left: this.left 

        });
    }
    if (direction == '40') {
        this.bottom -= runner.speed;
        $(".runner").finish().animate({
            bottom: this.bottom  
        });    
    }
        var collision = this.collision();
        var collision2 = this.collision2();
        var collision3 = this.collision3();
        var collision4 = this.collision4();
        
    console.log (collision);
        if (collision) {
            console.log("collided");
                   
        }
    console.log (collision2);
        if (collision2) {
            console.log("collided2");
            
        }
    console.log (collision3);
        if (collision3) {
            console.log("collided3");

        }

    console.log (collision4);
        if (collision4) {
            console.log("collided4");           

        }}
 addRunner(){
        console.log(this.bottom,this.left,this.height,this.width,this.color);
        $('body').append ("<div id='" + this.id + "' class='runner' style='bottom:" + this.bottom + "px; left:" + this.left + "px; height: " + this.height + "px; width:" + this.width + "px; background-color:" + this.color + "'></div>");        
        this.id = "runner" + $(".runner").length;
    }
        }
    



var Hurdle1 = new Hurdle(200, 225, 65, 17, "darkred");
var Hurdle2 = new Hurdle(400, 225, 110, 15, "darkred");
var Hurdle3 = new Hurdle(600, 225, 50, 10, "darkred");
var Hurdle4 = new Hurdle(800, 225, 125, 15, "darkred");
var runner =  new Runner (10, 225, 150, 25, "blue");
//var runner = new Runner (50, 371, 150, 25, "red");


                    


$(document).keydown(function(e) { 
    console.log (e.which);
    runner.move(e.which);

    });

        
console.log ("id",runner.id)