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
        this.addClass();


    }
    addClass(){
    //(_index, "runner"))

    }


   //bounce(){
        //TweenMax.to("runner" + this.id,1.2,{bottom:1000, delay:0, ease:Sine.easeOut});
        //TweenMax.to("runner" + this.id,1.2,{y:150, delay:0, ease:Sine.easeOut});
            //} 
    
    collision(){
        return this.left+this.width >= Hurdle1.left &&
        this.left <= Hurdle1.left+Hurdle1.width &&
        this.bottom <= Hurdle1.bottom+Hurdle1.height &&
        this.bottom+this.height >= Hurdle1.bottom;

    }

    move(direction){

    if (e.which == '37') { //down arrow key 
        this.left -= runner.speed;
        $(".runner").finish().animate({ 
            left: this.left 
        }); 
    } 
 
    if (e.which == '40') { //down arrow key 
        this.bottom += runner.speed;
        $(".runner").finish().animate({ 
            bottom: this.bottom
        }); 
    } 
 
    if (e.which == '39') { //right arrow key 
        this.left += runner.speed;
        $(".runner").finish().animate({ 
            left: this.left 

        });
    if (e.which == '38') {
        this.bottom -= runner.speed;
        $(".runner").finish().animate({
            bottom: this.bottom  
        });    
        var collision = this.collision

        if (collision) {
            console.log("collided");
        
        }
            else{
                console.log(":)")

        }

    
        
    
    }



    


    addRunner(){
        console.log(this.bottom,this.left,this.height,this.width,this.color);
        $('body').append ("<div id='" + this.id + "' class='runner' style='bottom:" + this.bottom + "px; left:" + this.left + "px; height: " + this.height + "px; width:" + this.width + "px; background-color:" + this.color + "'></div>");        
        this.id = "runner" + $(".runner").length;

    }
$(document).keydown(function(e) { 
    console.log (e.which);
    runner.move(e.which)

    }


            
            //console.log("runner-height",runner.height);
            //console.log("runner-width",runner.width);
            //console.log("runner-right",runner.left+runner.width);
            //console.log("runner-bottom",runner.bottom);
            //console.log("hurdle-height",Hurdle1.height);
            //console.log("hurdle-width",Hurdle1.width);
            //console.log("hurdle-left",Hurdle1.left);
            //console.log("hurdle-bottom",Hurdle1.bottom);
            //if (runner.left < Hurdle1.left + Hurdle1.width &&
            //runner.left + runner.width > Hurdle1.left &&
            //runner.bottom < Hurdle1.bottom + Hurdle1.height &&
            //runner.bottom + runner.height > Hurdle1.bottom);
                //$(document) .addClass();
                //alert("You Lose!");
   

                    
var Hurdle1 = new Hurdle(200, 225, 65, 17, "darkred");
var Hurdle2 = new Hurdle(400, 225, 110, 15, "darkred");
var Hurdle3 = new Hurdle(600, 225, 50, 10, "darkred");
var Hurdle4 = new Hurdle(800, 225, 125, 15, "darkred");
var runner =  new Runner (10, 225, 150, 25, "blue");
//var runner = new Runner (50, 371, 150, 25, "red");




        
console.log ("id",runner.id)