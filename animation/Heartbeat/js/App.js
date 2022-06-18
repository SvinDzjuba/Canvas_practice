var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var strokeWidth = 25;
var cntr = canvas.width/2;

ctx.moveTo(cntr,cntr-40);
ctx.bezierCurveTo(cntr+20, cntr-140, cntr+200, cntr-50, cntr, cntr+90);
ctx.bezierCurveTo(cntr-165, cntr-20, cntr-65, cntr-150, cntr+5, cntr-40);
ctx.fillStyle='red';

function beat() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.lineWidth = strokeWidth;
    ctx.strokeStyle = 'red';
    ctx.fill();
    ctx.stroke();
    strokeWidth--;
    console.log(strokeWidth)
    if(strokeWidth === 0) {
        let increaseInt = setInterval(() => {
            ctx.fill();
            ctx.stroke();
            strokeWidth++; 
            if (strokeWidth > 25 || strokeWidth < 0) {
                clearInterval(increaseInt);
            }
        }, 10);
    }
}
setInterval(beat, 20);