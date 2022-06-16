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
    ctx.fillRect(217*i, 125, 200, 200);

    ctx.fillStyle = 'rgb(' + 36 * i + ',' + 36 * i + ', 0)';
    ctx.fillRect(217*i, 350, 200, 200);
}
// 90deg triangle (seven floors, from 1 to 7)