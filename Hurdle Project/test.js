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
        this.jump = 100;
    }
    addRunner(){
        console.log(this.bottom,this.left,this.height,this.width,this.color);
        $('body').append ("<div class='runner' style='bottom:" + this.bottom + "px; left:" + this.left + "px; height: " + this.height + "px; width:" + this.width + "px; background-color:" + this.color + "'></div>");        
   
    }
        
}

class Bounce {
    constructor (translate, scale){
        this.translate = translate;
        this.scale = scale;

    }

    }


var Hurdle1 = new Hurdle(200, 225, 65, 17, "darkred");
var Hurdle2 = new Hurdle(400, 225, 110, 15, "darkred");
var Hurdle3 = new Hurdle(600, 225, 50, 10, "darkred");
var Hurdle4 = new Hurdle(800, 225, 125, 15, "darkred");
var runner =  newRunner (10, 371, 150, 25, "blue")

var bounce = new Bounce();
bounce.scale({
  from: { x: 0.5, y: 0.5 },
  to: { x: 1, y: 1 }
})
bounce.translate({
  from: { y: 0 },
  to: { y: 150 }
});

bounce.define("runner");
;


$(document).keydown(function(e) { 
 

    if (e.which == '37') { //down arrow key 
        $(".runner").finish().animate({ 
            left: "-=50" 
        }); 
    } 
 
        if (e.which == '40') { //down arrow key 
        $(".runner").finish().animate({ 
            top: "+=50" 
        }); 
    } 
 
    if (e.which == '39') { //right arrow key 
        $(".runner").finish().animate({ 
            left: "+=" + runner.speed  
            //top: "+=" + runner.jump + 
            
        }); 
        runner.left += runner.speed;
        //runner.bottom += runner.jump;
        
            console.log("runner-height",runner.height);
            //console.log("runner-width",runner.width);
            //console.log("runner-right",runner.left+runner.width);
            //console.log("runner-bottom",runner.bottom);
            //console.log("hurdle-height",Hurdle1.height);
            //console.log("hurdle-width",Hurdle1.width);
            //console.log("hurdle-left",Hurdle1.left);
            //console.log("hurdle-bottom",Hurdle1.bottom);
            if (runner.left < Hurdle1.left + Hurdle1.width &&
            runner.left + runner.width > Hurdle1.left) //&&
            //runner.bottom < Hurdle1.bottom + Hurdle1.heigh &&
            //runner.bottom + runner.height > Hurdle1.bottom)
    
                alert("You Lose!");
}             


//if (rect1.x < rect2.x + rect2.width &&
   //rect1.x + rect1.width > rect2.x &&
   //rect1.y < rect2.y + rect2.height &&
   //rect1.y + rect1.height > rect2.y) {
    // collision detected!
     

});             