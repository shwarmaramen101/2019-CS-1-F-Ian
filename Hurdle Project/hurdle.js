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
                    }); 
                } 
            }); 
            $(document).keydown(function(e) { 
                if (e.which == '83') { //down arrow key 
                    
                    $("#runner2").finish().animate({ 
                        top: "+=50" 
                    }); 
                } 
            }); 
            $(document).keydown(function(e) { 
                if (e.which == '100') { //right arrow key 
                    $("#runner2").finish().animate({ 
                        right: "-=50" 
                    }); 
                } 
            }); 
            
            $(document).keydown(function(e) { 
                if (e.which == '39') { //right arrow key 
                    $(".runner").finish().animate({ 
                        right: "-=50"
                        
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
