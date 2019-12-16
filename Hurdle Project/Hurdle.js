class Hurdle {
    constructor(x, y, height, width) {
        this.bottom = y;
        this.left = x;
        this.height = height;
        this.width = width;
    }
    add_Hurdle() {  //let's talk about the flow and how addHurdle gets implemented and what code needs to be in the function
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



/* all of your if statements below should go under 1 $(document).keydown() 
rather than separate*/

$(document).keydown(function(e) { 
    if (e.which == '87') { //up arrow key 
        $("#runner2").finish().animate({ 
            top: "-=50" 
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
