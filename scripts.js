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

const DestDefine = (x_origin, y_origin, distance, degree) => {
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

const backgroundDrawCorner = (x1, y1, x2, y2, x3, y3, color) => {
    context.strokeStyle = color;
    context.fillStyle = color;
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(x_center, y_center);
    context.lineTo(x3, y3);
    context.closePath();
    context.stroke();
    context.fill();
}

const backgroundDrawSide = (x1, y1, x2, y2, color) => {
    context.strokeStyle = color;
    context.fillStyle = color;
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x_center, y_center);
    context.lineTo(x2, y2);
    context.closePath();
    context.stroke();
    context.fill();
}

const drawBrawlStarsLogo = (context) => {
    x_center = context.canvas.width / 2;
    y_center = context.canvas.height / 2;
    backgroundDrawCorner(1000, 1000, 500, 1000, 1000, 800, 'rgb(232,116,43)');
    backgroundDrawCorner(0, 1000, 500, 1000, 0, 800, 'rgb(255,184,32)');
    backgroundDrawCorner(1000, 0, 500, 0, 1000, 200, 'rgb(254,226,91)');
    backgroundDrawSide(1000, 200, 1000, 800, 'rgb(255,184,32)')
    backgroundDrawSide(0, 200, 0, 800, 'rgb(254,226,91)')
    context.fillStyle = 'rgb(254,226,91)';
    context.beginPath();
    DestDefine(x_center, y_center, 35, 110);
    context.arc(x, y, 400, 0, radian(360));
    context.closePath();
    context.fill(); 
    context.fillStyle = 'rgb(0, 0, 0)';
    context.beginPath();
    context.arc(x_center, y_center, 400, 0, radian(360));
    context.closePath();
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
    context.closePath();
    context.stroke();
    context.fill();
    context.strokeStyle = 'rgb(0, 0, 0)';
    context.fillStyle = 'rgb(0, 0, 0)';
    context.beginPath();
    DestDefine(x_center, y_center, 165, 176);
    context.arc(x, y, 105, 0, radian(360));
    moveDest(x_center, y_center, 165, 28);
    DestDefine(x_center, y_center, 165, 28);
    context.arc(x, y, 105, 0, radian(360));
    context.closePath();
    context.stroke();
    context.fill();
    context.beginPath();
    moveDest(x_center, y_center, 90, 102);
    lineDest(x, y, 100, 72);
    lineDest(x, y, 100, 192);
    context.closePath();
    context.stroke();
    context.fill();
    context.beginPath();
    moveDest(x_center, y_center, 73, 255);
    for (let i = 0; i <= 1; i++) {
        lineDest(x, y, 67, 235 - 180 * i)
        continueArc(x, y, 22, 145 + 180 * i, 325 - 180 * i, 145 + 180 * i, true);
        moveDest(x, y, 22, 145 + 180 * i);
    }
    context.closePath();
    context.stroke();
    context.fill();
    context.beginPath();
    moveDest(x_center, y_center, 73, 309);
    for (let i = 0; i <= 1; i++) {
        lineDest(x, y, 67, 329 - 180 * i)
        continueArc(x, y, 22, 59 + 180 * i, 239 - 180 * i, 59 + 180 * i, false);
        moveDest(x, y, 22, 59 + 180 * i);
    }
    context.closePath();
    context.stroke();
    context.fill();
    context.strokeStyle = 'rgb(255, 255, 255)';
    context.fillStyle = 'rgb(255, 255, 255)';
    context.beginPath();
    DestDefine(x_center, y_center, 250, 250);
    context.ellipse(x, y, 120, 75, radian(340), 0, radian(360), false)
    context.closePath();
    context.stroke();
    context.fill();
}

function flipCardOnHover(card) {
    card.classList.add('flipped'); 
}
function revertCard(card) {
    card.classList.remove('flipped'); 
}