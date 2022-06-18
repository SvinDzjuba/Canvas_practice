var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var r = Math.floor(Math.random() * 255);
var g = Math.floor(Math.random() * 255);
var b = Math.floor(Math.random() * 255);
// White color check
if(r !== 255 && g !== 255 && b !== 255) {
    var generatedColor = 'rgb(' + r + ',' + g + ',' + b + ')';
}
else {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var generatedColor = 'rgb(' + r + ',' + g + ',' + b + ')';
}

var ball = {
    x: Math.floor(Math.random() * canvas.width),     // random x position
    y: Math.floor(Math.random() * canvas.height),     // random y position
    vx: Math.floor(Math.random() * 6) + 1,   // random x speed
    vy: Math.floor(Math.random() * 2) + 1,   // random y speed
    radius: Math.floor(Math.random() * 50) + 10,   // random radius
    color: generatedColor,  // random color
    draw: function() {  // draw the ball
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
};

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball.draw();
    ball.x += ball.vx;
    ball.y += ball.vy;

    if(ball.y + ball.vy > canvas.height - ball.radius || ball.y + ball.vy < ball.radius) {
        ball.vy = -ball.vy;
    }
    if(ball.x + ball.vx > canvas.width - ball.radius || ball.x + ball.vx < ball.radius) {
        ball.vx = -ball.vx;
    }

    window.requestAnimationFrame(draw);
}

window.addEventListener('load', (e) => {
    window.requestAnimationFrame(draw);
});

ball.draw();