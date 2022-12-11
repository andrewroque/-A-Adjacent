console.log('Hello Bitch');

// const button = document.querySelector('button');
// const box = document.getElementById('changeMe');

// // button.onclick = function changeColor(){
// //     box.style.background = 'aqua'; 
// // }


// function changeColor() {
//     if(box.style.background === 'red'){
//         box.style.background = 'aqua';
//     // } else if (box.style.background = 'yellow') {
//     //     box.style.background = 'red';
        
//     } else {
//         box.style.background = 'red';


//     }
// }


// const img = document.getElementById('test');
// //listenerEvent
// //toggle variable

// let toggle = true;
// img.addEventListener('click', function(){ 
//     //toggle
//     toggle = !toggle;
//     if(toggle){
//         img.src = 'img\\black.png';
//     } else{
//         img.src = 'img\\bl.png';
//     }
    
//     // img.src = 'img\\bl.png';
// })

// //working arraay
let myImage = document.getElementById('mainImage');
let imageArray = ["img\\black.png", "img\\white.png", "img\\bl.png", "img\\br.png", "img\\tl.png", "img\\tr.png"];
let imageIndex = 1; 


//click through array

function changeImage(){
    myImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if(imageIndex > 5 ) {imageIndex = 0;}
}


//working div click

// const divItem = document.getElementsByClassName('divItem');

// divItem.addEventListener('click', (e) => {
//     divClick()
// })

// function divClick(){
//     console.log('click');
//     myImage.setAttribute("src", imageArray[imageIndex]);
//     imageIndex++;
//     if(imageIndex > 5 ) {imageIndex = 0;}
// }










//CANVAS


const canvas = document.getElementById('drawing-board');
const toolbar = document.getElementById('toolbar');
const ctx = canvas.getContext('2d');

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

canvas.width = window.innerWidth - canvasOffsetX;
canvas.height = window.innerHeight - canvasOffsetY;

let isPainting = false;
let lineWidth = 5;
let startX;
let startY;

toolbar.addEventListener('click', e => {
    if (e.target.id === 'clear') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
});

toolbar.addEventListener('change', e => {
    if(e.target.id === 'stroke') {
        ctx.strokeStyle = e.target.value;
    }

    if(e.target.id === 'lineWidth') {
        lineWidth = e.target.value;
    }
    
});

const draw = (e) => {
    if(!isPainting) {
        return;
    }

    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';

    ctx.lineTo(e.clientX - canvasOffsetX, e.clientY);
    ctx.stroke();
}

canvas.addEventListener('mousedown', (e) => {
    isPainting = true;
    startX = e.clientX;
    startY = e.clientY;
});

canvas.addEventListener('mouseup', e => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
});

canvas.addEventListener('mousemove', draw);