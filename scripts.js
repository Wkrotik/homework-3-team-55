/*
    Code sample for SITE 1101 Principles of Information Systems 
    (c)2024 by Araz Yusubov 
    DISCLAIMER: All code examples we will look at are quick hacks intended to present working prototypes.
    Hence they do not follow best practice of programming or software engineering.    
*/

// Global variables for Artist's position and orientation
let x, y;
let angle;
let x_startingPoint;
let x_endPoint;
let y_startingPoint;
let y_endPoint;
let x_controlPoint1;
let y_controlPoint1;
let x_controlPoint2;
let y_controlPoint2;

function radian(degree) {
    return degree * Math.PI / 180;
}

/* function moveForward(distance, context) {
    let a = radian(angle);
    x = x + distance * Math.cos(a);
    y = y + distance * Math.sin(a);
    context.lineTo(x, y);    
} 

function turnRight(degree) {
    angle = angle - degree;
    if (angle < 0) angle = angle + 360;
}

function turnLeft(degree) {
    angle = angle + degree;
    if (angle > 360) angle = angle - 360;
}

function DrawSpiral(context) {
    // Inspired by Express Course (2024) Lesson 29: For Loops with Artist
    // https://studio.code.org/s/express-2024/lessons/29/levels/5

    // The initial position is in the center of the canvas
    x = context.canvas.width / 2;
    y = context.canvas.height / 2;
    // The initial orientation is zero degrees i.e. facing East
    angle = 0.0; 
    context.moveTo(x, y);
    context.beginPath();
    for (let counter = 3; counter < 600; counter += 3) {
        moveForward(counter, context);
        context.stroke();
        turnRight(89);
    }
} */

drawBrawlStarsLogo = (context) => {
    x = context.canvas.width / 2;
    y = context.canvas.height / 2;
    context.fillStyle = 'rgb(0, 0, 0)';
    context.arc(x, y, 400, 0, radian(360));
    context.fill();
    context.strokeStyle = 'rgb(250, 188, 36)';
    context.fillStyle = 'rgb(250, 188, 36)';
    context.beginPath();
    context.arc(x, y, 345, radian(196), radian(8));
    // context.fill();
    x_startingPoint = x + 345 * Math.cos(radian(196));
    y_startingPoint = y + 345 * Math.sin(radian(196));
    x_endPoint = x + 345 * Math.cos(radian(8));
    y_endPoint = y + 345 * Math.sin(radian(8));
    x_controlPoint1 = x + 510 * Math.cos(radian(148));
    y_controlPoint1 = y + 510 * Math.sin(radian(148));
    x_controlPoint2 = x + 510 * Math.cos(radian(56));
    y_controlPoint2 = y + 510 * Math.sin(radian(56));
    context.moveTo(x_startingPoint, y_startingPoint);
    context.bezierCurveTo(x_controlPoint1, y_controlPoint1, x_controlPoint2, y_controlPoint2, x_endPoint, y_endPoint);
    // context.fill();
    x_startingPoint = x + 310 * Math.cos(radian(140));
    y_startingPoint = y + 260 * Math.sin(radian(140));
    context.moveTo(x_startingPoint, y_startingPoint);
    x_endPoint = x_startingPoint + 40 * Math.cos(radian(102));
    y_endPoint = y_startingPoint + 40 * Math.sin(radian(102));
    context.lineTo(x_endPoint, y_endPoint);
    x_startingPoint = x_endPoint + 36 * Math.cos(radian(12));
    y_startingPoint = y_endPoint + 36 * Math.sin(radian(12));
    context.arc(x_startingPoint, y_startingPoint, 36, radian(192), radian(102), true);
    x_startingPoint = x_startingPoint + 36 * Math.cos(radian(102));
    y_startingPoint = y_startingPoint + 36 * Math.sin(radian(102));
    x_endPoint = x_startingPoint + 324 * Math.cos(radian(12));
    y_endPoint = y_startingPoint + 324 * Math.sin(radian(12));
    context.lineTo(x_endPoint, y_endPoint);
    x_startingPoint = x_endPoint + 36 * Math.cos(radian(282));
    y_startingPoint = y_endPoint + 36 * Math.sin(radian(282));
    context.arc(x_startingPoint, y_startingPoint, 36, radian(102), radian(12), true);
    x_startingPoint = x_startingPoint + 36 * Math.cos(radian(12));
    y_startingPoint = y_startingPoint + 36 * Math.sin(radian(12));
    context.moveTo(x_startingPoint, y_startingPoint);
    x_endPoint = x_startingPoint + 40 * Math.cos(radian(282));
    y_endPoint = y_startingPoint + 40 * Math.sin(radian(282));
    context.lineTo(x_endPoint, y_endPoint);
    x_endPoint = x + 310 * Math.cos(radian(140));
    y_endPoint = y + 260 * Math.sin(radian(140));
    context.lineTo(x_endPoint, y_endPoint);
    context.stroke();
    context.fill();
}