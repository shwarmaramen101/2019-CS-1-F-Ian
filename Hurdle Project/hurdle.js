class Hurdle {
    constructor(x, y, height, width, color) {
        this.bottom = y;
        this.left = x;
        this.height = height;
        this.width = width;
        this.color = color;
        this.addHurdle(); // Add the addHurdle function which will append the hurdle to the screen.
    }
    //let's talk about the flow and how addHurdle gets implemented and what code needs to be in the function
    addHurdle(){
        console.log(this.bottom,this.left,this.height,this.width,this.color);
        $('body').append ("<div class='hurdle' style='bottom:" + this.bottom + "px; left:" + this.left + "px; height: " + this.height + "px; width:" + this.width + "px; background-color:" + this.color + "'></div>");        
   
    }
    isInside(){
        return true;
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

function inside ()

    var rect1 = {x: 200, y: 225, width: 17, height: 65}
    var rect2 = {x: 400, y: 225, width: 15, height: 110}

if (rect1.x < rect2.x + rect2.width &&
   rect1.x + rect1.width > rect2.x &&
   rect1.y < rect2.y + rect2.height &&
   rect1.y + rect1.height > rect2.y) {
        alert("You lose") ;
}

// filling in the values =>

if (200 < 415 &&
    217 > 400 &&
    225 < 335 &&
    290 > 225) {
      alert("You lose") ;
}

getPosition() ;
        return [left, bottom];
        [200,217]
        [225,290]
    if (200>x>217) 
        alert("You lose") ;


var Hurdle1 = new Hurdle(200, 225, 65, 17, "darkred");
var Hurdle1 = new Hurdle(400, 225, 110, 15, "darkred");
var Hurdle1 = new Hurdle(600, 225, 50, 10, "darkred");
var Hurdle1 = new Hurdle(800, 225, 125, 15, "darkred");

