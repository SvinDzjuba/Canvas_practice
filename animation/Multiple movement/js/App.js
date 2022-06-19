var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// start canvas action by page load
window.addEventListener('load', function() {
    window.requestAnimationFrame(drawCircle);
    window.requestAnimationFrame(drawSquare);
});

// function to make life easier :), returns a random number
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// CIRCLE

var circle = {
    x: getRandomInteger(80, canvas.width - 80),
    y: getRandomInteger(80, canvas.height - 80),
    vx: getRandomInteger(2, 6),
    vy: getRandomInteger(1, 5),
    radius: getRandomInteger(10, 25),
    circleWidth: getRandomInteger(2, 15),
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
};

// SQUARE

var square = {
    x: getRandomInteger(80, canvas.width - 80),
    y: getRandomInteger(80, canvas.height - 80),
    vx: getRandomInteger(2, 6),
    vy: getRandomInteger(1, 5),
    lineSize: getRandomInteger(20, 45),
    squareWidth: getRandomInteger(2, 6),
    color: 'rgba(229,112,0,0.8)',   // orange
    draw: function() {
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.squareWidth
        ctx.strokeRect(this.x, this.y, this.lineSize, this.lineSize);
        ctx.fill();
    }
};
function drawSquare() {
    ctx.fillStyle = 'rgba(255,255,255,0.3)';
    ctx.fill();

    square.draw();
    square.x += square.vx;
    square.y += square.vy;

    // left and right borders
    if(square.x + square.vx > canvas.width - square.lineSize || square.x + square.vx < 0) {
        square.vx = -square.vx;
    }
    // top and bottom borders
    if(square.y + square.vy > canvas.height - square.lineSize || square.y + square.vy < 0) {
        square.vy = -square.vy;
    }

    window.requestAnimationFrame(drawSquare);
};

// CROSS

var cross = {
    x: getRandomInteger(80, canvas.width - 80),
    y: getRandomInteger(80, canvas.height - 80),
    vx: getRandomInteger(2, 6),
    vy: getRandomInteger(1, 5),
    lineSize: getRandomInteger(20, 45),
    color: 'lightrose',
    draw: function() {
        ctx.beginPath();
        ctx.lineWidth = this.lineSize;
        ctx.moveTo(x - 20, y - 20);
        ctx.lineTo(x + 20, y + 20);
        
        ctx.moveTo(x + 20, y - 20);
        ctx.lineTo(x - 20, y + 20);
        ctx.stroke();
    }
};
function drawCross() {
    ctx.fillStyle = 'rgba(255,255,255,0.3)';
    ctx.fill();

    cross.draw();
    cross.x += cross.vx;
    cross.y += cross.vy;

    // left and right borders
    if(cross.x + cross.vx > canvas.width - cross.lineSize || cross.x + cross.vx < 0) {
        cross.vx = -cross.vx;
    }
    // top and bottom borders
    if(cross.y + cross.vy > canvas.height - cross.lineSize || cross.y + cross.vy < 0) {
        cross.vy = -cross.vy;
    }

    window.requestAnimationFrame(drawCross);
}