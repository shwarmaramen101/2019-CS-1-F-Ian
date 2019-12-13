<<<<<<< HEAD:Hurdle Project/Hurdle.js
            $(document).keydown(function(e) { 
                if (e.which == '39') { //right arrow key 
                    $(".runner").finish().animate({ 
                        right: "-=50"
                        
=======
class Hurdle{ 
    constructor(x,y,height,width){ 
        this.bottom = 400; 
        this.left = 225; 
        this.height = 75;
        this.width = 10;
    } 
    add_Address(){   /* Maybe change this to just add */
        this.add = add; /* You will need an append to add the element to the screen */
    } 
    getposition(){ /* Use camel case, should be getPosition */
        console.log(`Name is ${this.bottom},Address is: ${this.left}`); 
        /* you want your getPosition to return the left and bottom, not printed it. Ask me in class */
    } 
} 

/* all of your if statements below should go under 1 $(document).keydown() 
rather than separate*/

$(document).keydown(
    function(e) { 
                if (e.which == '87') { //up arrow key 
                    $("#runner2").finish().animate({ 
                        top: "-=50" 
>>>>>>> 997f7f7c9281d86cfbdfa0b3b88d4e66eea35b8f:Hurdle Project/hurdle.js
                    }); 
                } 
            }); 
            $(document).keydown(function(e) { 
                if (e.which == '38') { //up arrow key 
                    $(".runner").finish().animate({ 
                        top: "-=50" 
                    }); 
                } 
            }); 
            $(document).keydown(function(e) { 
                if (e.which == '40') { //down arrow key 
                    $(".runner").finish().animate({ 
                        top: "+=50" 
                    }); 
                } 
            });             
                        $(document).keydown(function(e) { 
                if (e.which == '39') { //right arrow key 
                    $(".runner2").finish().animate({ 
                        right: "-=50"
                        
                    }); 
                } 
            }); 
            $(document).keydown(function(e) { 
                if (e.which == '38') { //up arrow key 
                    $(".runner2").finish().animate({ 
                        top: "-=50" 
                    }); 
                } 
            }); 
            $(document).keydown(function(e) { 
                if (e.which == '40') { //down arrow key 
                    $(".runner2").finish().animate({ 
                        top: "+=50" 
                    }); 
                } 
            });             
<<<<<<< HEAD:Hurdle Project/Hurdle.js
class Hurdle {
    constructor(x, y, height, width) {
        this.bottom = y;
        this.left = x;
        this.height = height;
        this.width = width;
    }
    add_Hurdle() {
        append = h1;
        this.add = h2;
        
    }
    getPosition() {
        return [x, y];
    }
}
class Runner {
    constructor (x,y, height, width) {
        this.bottom = y;
        this.left = x;
        this.height = height;
        this.width = width;
    }


}


var h1 = new Hurdle(100, 0, 25, 10);
var h2 = new Hurdle(200, 0, 85, 10);
=======
>>>>>>> 997f7f7c9281d86cfbdfa0b3b88d4e66eea35b8f:Hurdle Project/hurdle.js
