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




function setup() {
    let canvas = createCanvas(800, 500);
    pixelDensity(1);
    background(255, 255, 255);
    canvas.parent('sketch-container');
    video = createCapture(VIDEO);
    video.size(width/vScale, height/vScale);
    video.hide();
    saveButton = createButton("Asdf");
    saveButton.mousePressed(saveSnap);
}

function saveSnap() {
    saveCanvas('adsdff', 'png');
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

            // var threshold = 120;

            // if (bright > threshold) {
            //     fill(255);
            // } else {
            //     fill(0);
            // }
            
            fill(bright);
            rectMode(CENTER);
            rect(x*vScale, y*vScale, vScale, vScale);


        }
    }

    // video.updatePixel();
}

