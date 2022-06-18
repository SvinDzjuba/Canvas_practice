var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// CIRCLE

var circle = {
    x: getRandomInteger(0, canvas.width),
    y: getRandomInteger(0, canvas.height),
    vx: getRandomInteger(2, 6),
    vy: getRandomInteger(1, 5),
    radius: getRandomInteger(15, 35),
    circleWidth: 5,
    color: 'rgba(79,181,239,0.8)',   // light blue
    draw: function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.circleWidth
        ctx.stroke();
    }
};
function drawCircle() {
    ctx.fillStyle = 'rgba(255,255,255,0.3)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    circle.draw();
    // makes animation
    circle.x += circle.vx;
    circle.y += circle.vy;

    // left and right borders
    if(circle.x + circle.vx > canvas.width - circle.radius || circle.x + circle.vx < circle.radius) {
        circle.vx = -circle.vx;
    }
    // top and bottom borders
    if(circle.y + circle.vy > canvas.height - circle.radius || circle.y + circle.vy < circle.radius) {
        circle.vy = -circle.vy;
    }

    // start animation
    window.requestAnimationFrame(drawCircle)
}


// start canvas action by page load
window.addEventListener('load', function() {
    window.requestAnimationFrame(drawCircle);
});