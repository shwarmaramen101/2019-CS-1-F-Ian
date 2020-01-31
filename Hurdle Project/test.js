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
    }
    addRunner(){
        console.log(this.bottom,this.left,this.height,this.width,this.color);
        $('body').append ("<div class='runner' style='bottom:" + this.bottom + "px; left:" + this.left + "px; height: " + this.height + "px; width:" + this.width + "px; background-color:" + this.color + "'></div>");        
   
    }
        
}



var Hurdle1 = new Hurdle(200, 225, 65, 17, "darkred");
var Hurdle2 = new Hurdle(400, 225, 110, 15, "darkred");
var Hurdle3 = new Hurdle(600, 225, 50, 10, "darkred");
var Hurdle4 = new Hurdle(800, 225, 125, 15, "darkred");
var runner = new Runner (10, 371, 150, 25, "blue")


$(document).keydown(function(e) { 

    if (e.which == '38') { //up arrow key 
        $(".runner").finish().animate({ 
            top: "+=50" 
        }); 
    } 


    if (e.which == '40') { //down arrow key 
        $(".runner").finish().animate({ 
            top: "-=50" 
        }); 
    } 
 
    if (e.which == '68') { //right arrow key 
        $(".runner").finish().animate({ 
            left: "+=50"
            
        }); 
            if (Hurdle1.left < runner.left + Hurdle1.width &&
            Hurdle1.left + Hurdle1.width > runner.left &&
            Hurdle1.bottom < runner.bottom + runner.height &&
            Hurdle1.bottom + Hurdle1.height > runner.bottom) {
                alert("You Lose!")
}
    } 

});             
