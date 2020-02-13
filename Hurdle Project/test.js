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
        this.bounce();
        this.id;
        this.length;

    }
    bounce(){
        tweenMax.to("runner" + this.id,1.2,{y:150, delay:0, ease:Sine.easeOut});
    }
    

    addRunner(){
        console.log(this.bottom,this.left,this.height,this.width,this.color);
        this.id = var runner + .length;
        $('body').append ("<div id='runner" + this.id + "' class='runner' style='bottom:" + this.bottom + "px; left:" + this.left + "px; height: " + this.height + "px; width:" + this.width + "px; background-color:" + this.color + "'></div>");        
   
    }}



                    
var Hurdle1 = new Hurdle(200, 225, 65, 17, "darkred");
var Hurdle2 = new Hurdle(400, 225, 110, 15, "darkred");
var Hurdle3 = new Hurdle(600, 225, 50, 10, "darkred");
var Hurdle4 = new Hurdle(800, 225, 125, 15, "darkred");
var runner =  new Runner (10, 371, 150, 25, "blue")



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


            
            //console.log("runner-height",runner.height);
            //console.log("runner-width",runner.width);
            //console.log("runner-right",runner.left+runner.width);
            console.log("runner-bottom",runner.bottom);
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
     

});             