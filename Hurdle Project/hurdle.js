            $(document).keydown(function(e) { 
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
class HURDLE{ 
    constructor(x,y,height,width){ 
        this.bottom = 400; 
        this.left = 225; 
        this.height = 75;
        this.width = 10;
    } 
    add_Address(add){ 
        this.add = add; 
    } 
    getposition(){ 
        console.log(`Name is ${this.bottom},Address is: ${this.left}`); 
    } 
} 