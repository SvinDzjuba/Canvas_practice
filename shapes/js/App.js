var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.fillStyle = 'red';
ctx.fillRect(100, 50, 250, 275);
ctx.fillStyle = 'blue';
ctx.fillRect(500, 250, 250, 400);

ctx.clearRect(0, 0, 1500, 700)

// two lines of squares with different tones of color
for (let i = 0; i < 7; i++) {
    ctx.fillStyle = 'rgb(' + 36 * i + ',' + 36 * i + ', 255)';
    ctx.fillRect(217*i, 275, 200, 200);

    ctx.fillStyle = 'rgb(' + 36 * i + ',' + 36 * i + ', 0)';
    ctx.fillRect(217*i, 500, 200, 200);
}

// square stroke
ctx.fillStyle = 'red';
ctx.lineWidth = 5
ctx.strokeRect(50,50, 200, 200);

// cross 1

ctx.strokeStyle = 'lightblue';
ctx.lineWidth = 15;
// ctx.rotate(-45 * (Math.PI / 180));
// ctx.roundRect(170, 300, 90, 1, 1);
// ctx.stroke();

// ctx.rotate(90 * (Math.PI / 180));
// ctx.roundRect(255, -215, 90, 1, 1);
// ctx.stroke();


// cross 2

// function drawX(x, y) {
//     ctx.beginPath();

//     ctx.strokeStyle = 'black';
//     ctx.moveTo(x - 20, y - 20);
//     ctx.lineTo(x + 20, y + 20);

//     ctx.moveTo(x + 20, y - 20);
//     ctx.lineTo(x - 20, y + 20);
//     ctx.stroke();
// }
// drawX(80, 80);


// cross 3

// Non-rotated rectangle
ctx.fillStyle = 'gray';
ctx.fillRect(80, 60, 100, 15);

// Matrix transformation
ctx.translate(150, 75);
ctx.rotate(Math.PI / 2);
ctx.translate(-135, -50);

// Rotated rectangle
ctx.fillRect(80, 60, 100, 15);