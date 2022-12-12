console.log('Hello Bitch');

console.log('Hello');

let canvas;
let video;
let saveButton;
let r;
let g;
let b;
let vScale = 20;
let threshold;
let container = document.getElementById("sketch-container");
let w = container.clientWidth;
let h = container.clientHeight;
console.log(w,h);




function setup() {
    let canvas = createCanvas(w, h);
    pixelDensity(1);
    background(255, 255, 255);
    canvas.parent('sketch-container');
    video = createCapture(VIDEO);
    canvas.id('mycanvas');
    video.size(width/vScale, height/vScale);
    video.hide();
    // saveButton = createButton("Asdf");
    saveButton = createImg('img/s.png');
    saveButton.mousePressed(saveSnap);
    saveButton.id('savebutt');
    saveButton.parent('buttonbar');
}

function saveSnap() {
    saveCanvas('a-adjacent', 'png');
}

function draw() {
    // image(video, 0, 0); 
    video.loadPixels();
    loadPixels;
    // background(255, 255, 255);  
    for (var y = 0; y < video.height; y++) {
        for (var x = 0; x < video.width; x++) {
            var index = (x + y * video.width)*4;
            var r = video.pixels[index+0];
            var g = video.pixels[index+1];
            var b = video.pixels[index+2];
            
            var bright = (r+g+b)/2;

            var threshold = 200;

            if (bright > threshold) {
                fill(255);
            } else {
                fill(0);
            }
            //comment out fill for treshold to work
            // fill(bright);
            rectMode(CENTER);
            rect(x*vScale, y*vScale, vScale, vScale);


        }
    }

    // video.updatePixel();
}

