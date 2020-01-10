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



//////////// COLLISION ALGO FROM MDN
/* 
if (rect1.x < rect2.x + rect2.width &&
   rect1.x + rect1.width > rect2.x &&
   rect1.y < rect2.y + rect2.height &&
   rect1.height + rect1.y > rect2.y) {

}
*/

const collider = {
  moveableDiv: null,
  staticDivs: [],
  checkCollision: function() {
    let hasJustCollided = false;
    for (let i = 0; i < this.staticDivs.length; i++) {
      const currentDiv = this.staticDivs[i];
      if (currentDiv.position.left < this.moveableDiv.position.left + this.moveableDiv.position.width &&
      currentDiv.position.left + currentDiv.position.width > this.moveableDiv.position.left &&
      currentDiv.position.top < this.moveableDiv.position.top + this.moveableDiv.position.height &&
      currentDiv.position.height + currentDiv.position.top > this.moveableDiv.position.top) {
        hasJustCollided = true;
        if (!this.moveableDiv.ref.classList.contains('collision-state')) {
          this.moveableDiv.ref.classList.add('collision-state');
        }
      } else if (this.moveableDiv.ref.classList.contains('collision-state') && !hasJustCollided) {
          this.moveableDiv.ref.classList.remove('collision-state');
        }
    }
  },

};

class BaseDiv {
  constructor(position) {
    this.position = position;
  }
}

class MoveDiv extends BaseDiv {
  constructor(position, ref) {
    super(position);
    this.ref = ref;
  }
  shiftPosition(x, y) {
    this.position.left += x;
    this.position.top += y;
    this.reDraw();
  }
  reDraw() {
    this.ref.setAttribute('style', `left: ${this.position.left}px; top: ${this.position.top}px`);
    collider.checkCollision();
  }
}

function positionCreator(currentDiv) {
  return {
    left: currentDiv.getBoundingClientRect().left,
    top: currentDiv.getBoundingClientRect().top,
    height: currentDiv.getBoundingClientRect().height,
    width: currentDiv.getBoundingClientRect().width
  };
}


(() => {
  const allTheDivs = document.querySelectorAll('.collideme');
  for (let i = 0; i < allTheDivs.length; i++) {
    const currentDiv = allTheDivs[i];
    if (currentDiv.dataset.dynamic === 'true') {
      currentDiv.setAttribute('style', 'left: 500px; top: 300px;');
      const moveableDiv = new MoveDiv(positionCreator(currentDiv), currentDiv);
      collider.moveableDiv = moveableDiv;
    } else {
      currentDiv.setAttribute('style', `left: ${Math.floor(Math.random() * 400)}px; top: ${Math.floor(Math.random() * 600)}px;`);
      const staticDiv = new BaseDiv(positionCreator(currentDiv));
      collider.staticDivs.push(staticDiv);
    }
  }
  document.addEventListener('keydown', (e) => moveDiv(e));
})();

var Hurdle1 = new Hurdle(200, 225, 65, 17, "darkred");
var Hurdle1 = new Hurdle(400, 225, 110, 15, "darkred");
var Hurdle1 = new Hurdle(600, 225, 50, 10, "darkred");
var Hurdle1 = new Hurdle(800, 225, 125, 15, "darkred");
