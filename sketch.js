var ships = [];
var stars = [];
var timer = 0;
var wave;
var canvas;

function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight - 3.501);
    for (var i = 0; i < 10; i++) {
        ships[i] = new Ship();
    }
    for (var j = 0; j < 10; j++) {
        stars[j] = new Star();
    }
    wave = new Wave();
}
window.onresize = function() {
    var w = window.innerWidth;
    var h = window.innerHeight;  
    canvas.size(w,h);
    width = w;
    height = h;
}
function draw() {
    background(0);
    stars.push(new Star(mouseX))
    for (var j = 0; j < stars.length; j++) {
        stars[j].display();
    }
    timer += 1;
    for (var i = 0; i < ships.length; i++) {
        if (timer > 100) {
            timer = 0;
            for (var knez = 0; knez < 10; knez++) {
                ships.push(new Ship());
            }
        }
        ships[i].display();
        ships[i].update();
        if (ships[i].timer > 800) {
            ships.splice(0, 10);
            ships[i].timer = 0;
        }
    }  
    
    for (var k = 0; k < stars.length; k++) {
        stars[k].update();
    }
    if (stars.length > 3) {
        stars.splice(0,1);
    }
    wave.display();
    wave.update();
}