let CANVAS;
let ANGLE=0;
function main(){
    CANVAS=document.getElementById("myCanvas");
    CANVAS.width=window.innerWidth;
    CANVAS.height=window.innerHeight;

    window.addEventListener("deviceorientation",onOrientationChange);
}

function onOrientationChange(event){
    ANGLE=event.alpha;
    const rad=Math.min(CANVAS.width,CANVAS.height)*0.45;

    const ctx=CANVAS.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle="white";
    ctx.moveTo(CANVAS.width/2,CANVAS.height/2);
    ctx.lineTo(CANVAS.width/2,CANVAS.height/2-rad);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle="#47f";
    ctx.moveTo(CANVAS.width/2,CANVAS.height/2);
    const movingTip={
        x:CANVAS.width/2+Math.cos(ANGLE)*rad,
        y:CANVAS.height/2+Math.sin(ANGLE)*rad,
    }
    ctx.lineTo(movingTip.x, movingTip.y);
    ctx.stroke();
}