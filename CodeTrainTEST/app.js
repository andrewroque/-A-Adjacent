console.log('Hello');

var video;
var asdf;
var bgcolor;
let container = document.getElementById("sketch-container");
let w = container.clientWidth;
let h = container.clientHeight;
var vScale = 16;



function setup() {
    console.log(w,h);
    let canvas = createCanvas(w, h);
    pixelDensity(1);
    video = createCapture(VIDEO);
    video.size(width/vScale, height/vScale);
    video.hide();
    canvas.parent('#sketch-container');

    asdf = createButton("Asdf");
    asdf.mousePressed(savePhoto);
}



function draw() {
    // VIDEO GRID EFFECT
    video.loadPixels();
    // // every x and every y and assiging color
    for (var y = 0; y < video.height; y++) {
        for (var x = 0; x < video.width; x++) {
            var index = (x + y * video.width)*4;
            var r = video.pixels[index+0];
            var g = video.pixels[index+1];
            var b = video.pixels[index+2];
  
            var bright = (r+g+b)/3;

            fill(bright);
            rect(x*vScale, y*vScale, vScale, vScale);
            
        }
    }
    
    // video.updatePixels();
}

// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
//   }

function changeColor() {
    bgcolor = color( random(255), random(255), random(255) );
}

function takesnap() {
    snapshots.push(video.get());

}

function nobright() {

}

function savePhoto () {
    saveFrames('asdf', 'png', 1, 1);
}