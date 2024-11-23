/*
    Code sample for SITE 1101 Principles of Information Systems 
    (c)2024 by Araz Yusubov 
    DISCLAIMER: All code examples we will look at are quick hacks intended to present working prototypes.
    Hence they do not follow best practice of programming or software engineering.    
*/

// Global variables for Artist's position and orientation
let x, y;
let x_center;
let y_center;
let x_startingPoint;
let x_endPoint;
let y_startingPoint;
let y_endPoint;
let x_controlPoint1;
let y_controlPoint1;
let x_controlPoint2;
let y_controlPoint2;

const radian = (degree) => degree * Math.PI / 180;
const xDefine = (x_origin, distance, degree) => x_origin + distance * Math.cos(radian(degree));
const yDefine = (y_origin, distance, degree) => y_origin + distance * Math.sin(radian(degree));

const DestDefine = (x_origin,y_origin, distance, degree) => {
    x = xDefine(x_origin, distance, degree);
    y = yDefine(y_origin, distance, degree);
}

const lineDest = (x_origin, y_origin, distance, degree) => {
    DestDefine(x_origin, y_origin, distance, degree);
    context.lineTo(x, y);    
} 

const moveDest = (x_origin, y_origin, distance, degree) => {
    DestDefine(x_origin, y_origin, distance, degree);
    context.moveTo(x, y);    
} 

const continueArc = (x_origin, y_origin, radius, degree, angle_1, angle_2, counterclockwise) => {
    DestDefine(x_origin, y_origin, radius, degree);
    context.arc(x, y, radius, radian(angle_1), radian(angle_2), counterclockwise);    
} 

/* function turnRight(degree) {
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

const drawBrawlStarsLogo = (context) => {
    x_center = context.canvas.width / 2;
    y_center = context.canvas.height / 2;
    context.fillStyle = 'rgb(0, 0, 0)';
    context.arc(x_center, y_center, 400, 0, radian(360));
    context.fill();
    context.strokeStyle = 'rgb(250, 188, 36)';
    context.fillStyle = 'rgb(250, 188, 36)';
    context.beginPath();
    context.arc(x_center, y_center, 345, radian(196), radian(8));
    moveDest(x_center, y_center, 345, 196);
    x_endPoint = xDefine(x_center, 345, 8);
    y_endPoint = yDefine(y_center, 345, 8);
    x_controlPoint1 = xDefine(x_center, 510, 148);
    y_controlPoint1 = yDefine(y_center, 510, 148);
    x_controlPoint2 = xDefine(x_center, 510, 56);
    y_controlPoint2 = yDefine(y_center, 510, 56);
    context.bezierCurveTo(x_controlPoint1, y_controlPoint1, x_controlPoint2, y_controlPoint2, x_endPoint, y_endPoint);
    x = xDefine(x_center, 310, 140);
    y = yDefine(y_center, 260, 140);
    context.moveTo(x, y);
    lineDest(x, y, 40, 102);
    continueArc(x, y, 36, 12, 192, 102, true);
    DestDefine(x, y, 36, 102);
    lineDest(x, y, 324, 12);
    continueArc(x, y, 36, 282, 102, 12, true);
    DestDefine(x, y, 36, 12);
    lineDest(x, y, 40, 282);
    x = xDefine(310, 140);
    y = yDefine(260, 140);
    context.lineTo(x, y);
    
    context.stroke();
    context.fill();
}