class Hurdle {
    constructor(x, y, height, width, color) {
        this.bottom = y;
        this.left = x;
        this.height = height;
        this.width = width;
        this.color = color;
        this.addHurdle(); // Add the addHurdle function which will append the hurdle to the screen.
    }
    addHurdle(){
        console.log(this.bottom,this.left,this.height,this.width,this.color);
        $('body').append ("<div class='hurdle' style='bottom:" + this.bottom + "px; left:" + this.left + "px; height: " + this.height + "px; width:" + this.width + "px; background-color:" + this.color + "'></div>");        
   
    }
        
}
class runner {
    constructor(x, y, height, width, color) {
        this.bottom = y;
        this.left = x;
        this.height = height;
        this.width = width;
        this.color = color;
        this.addrunner(); // Add the addHurdle function which will append the hurdle to the screen.
    }
    addrunner(){
        console.log(this.bottom,this.left,this.height,this.width,this.color);
        $('body').append ("<div class='runner' style='bottom:" + this.bottom + "px; left:" + this.left + "px; height: " + this.height + "px; width:" + this.width + "px; background-color:" + this.color + "'></div>");        
   
    }
        
}

/*getPosition() ;
        return [x, y];*/

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
 
    if (e.which == '39') { //right arrow key 
        $(".runner").finish().animate({ 
            right: "-=50"
            
        }); 
    } 

    if (e.which == '83') { //up arrow key (you have 2 up arrow definitions)
        $("#runner2").finish().animate({ 
            top: "-=50" 
        }); 
    } 

    if (e.which == '68') { //right arrow key 
        $("#runner2").finish().animate({ 
            left: "+=50" 
        }); 
    } 

     if (e.which == '87') { //down arrow key 
        $("#runner2").finish().animate({   //<-- did you mean .runner?
            top: "+=50" 
        }); 
    } 
});             

if (Hurdle1.x < runner.x + Hurdle1.width &&
   Hurdle1.x + Hurdle1.width > runner.x &&
   Hurdle1.y < runner.y + runner.height &&
   Hurdle1.y + Hurdle1.height > runner.y) {
    // collision detected!
    alert("You Lose!")
}



var Hurdle1 = new Hurdle(200, 225, 65, 17, "darkred");
var Hurdle2 = new Hurdle(400, 225, 110, 15, "darkred");
var Hurdle3 = new Hurdle(600, 225, 50, 10, "darkred");
var Hurdle4 = new Hurdle(800, 225, 125, 15, "darkred");
var runner = new runner (0, 225, 150, 15, "blue")