const BACKGROUND_COLOUR = '#000000';
const LINE_COLOUR = '#FFFFFF';
const LINE_WIDTH = 15;


var currentX = 0;
var currentY = 0;
var previousX = 0;
var previousY = 0;

var drawing = false;

var canvas;
var context;

function prepareCanvas() {
    canvas = document.getElementById('canva')
    context = canvas.getContext('2d')

    context.fillStyle = BACKGROUND_COLOUR;
    context.fillRect(0,0,canvas.clientWidth, canvas.clientHeight);

    context.strokeStyle = LINE_COLOUR;
    context.lineWidth = LINE_WIDTH;
    context.lineJoin = 'round'


    document.addEventListener('mousedown', function (event) {
        drawing = true;
        currentX = event.clientX - canvas.offsetLeft;
        currentY = event.clientY - canvas.offsetTop;
    });

    document.addEventListener('mousemove', function (event) {
        if(drawing==true){
            previousX = currentX;
            currentX = event.clientX - canvas.offsetLeft;
    
            previousY = currentY;
            currentY = event.clientY - canvas.offsetTop;
    
            draw();
        }
    });

    document.addEventListener('mouseup', function (event) {
        drawing = false;
    });

    canvas.addEventListener('mouseleave', function (event) {
        drawing = false;
    });

    canvas.addEventListener('touchstart', function (event) {
        drawing = true;
        currentX = event.touches[0].clientX - canvas.offsetLeft;
        currentY = event.touches[0].clientY - canvas.offsetTop;
    });

    canvas.addEventListener('touchmove', function (event) {
        if(drawing==true){
            previousX = currentX;
            currentX = event.touches[0].clientX - canvas.offsetLeft;
    
            previousY = currentY;
            currentY = event.touches[0].clientY - canvas.offsetTop;
    
            draw()
        }
    });
    
    canvas.addEventListener('touchend', function (event) {
        drawing = false;
    });

    canvas.addEventListener('touchcancel', function (event) {
        drawing = false;
    });


}

function draw() {
    context.beginPath();
    context.moveTo(previousX, previousY);
    context.lineTo(currentX, currentY);
    context.closePath();
    context.stroke();
}

function clearCanvas() {
    currentX = 0;
    currentY = 0;
    previousX = 0;
    previousY = 0;

    context.fillRect(0,0,canvas.clientWidth, canvas.clientHeight);
}
