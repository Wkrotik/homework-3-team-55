// Drop-down menu function
function toggleMenu() {
    const menu = document.getElementById("dropdownMenu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

// Dark Theme
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

// Function to add a 'flipped' class to a card when hovered over
const flipCardOnHover = (card) => card.classList.add('flipped');

// Function to remove the 'flipped' class from a card
const revertCard = (card) => card.classList.remove('flipped');

// Declare variables for canvas coordinates and control points
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

// Utility function to convert degrees to radians
const radian = (degree) => degree * Math.PI / 180;

// Function to calculate the x-coordinate based on distance and angle
const xDefine = (x_origin, distance, degree) => x_origin + distance * Math.cos(radian(degree));

// Function to calculate the y-coordinate based on distance and angle
const yDefine = (y_origin, distance, degree) => y_origin + distance * Math.sin(radian(degree));

// Function to set destination x and y coordinates based on origin, distance, and angle
const DestDefine = (x_origin, y_origin, distance, degree) => {
    x = xDefine(x_origin, distance, degree);
    y = yDefine(y_origin, distance, degree);
}

// Function to draw a line from the current position to the destination
const lineDest = (x_origin, y_origin, distance, degree) => {
    DestDefine(x_origin, y_origin, distance, degree);
    context.lineTo(x, y);    
} 

// Function to move the drawing cursor to the destination without drawing a line
const moveDest = (x_origin, y_origin, distance, degree) => {
    DestDefine(x_origin, y_origin, distance, degree);
    context.moveTo(x, y);    
} 

// Function to draw an arc using a radius and angles, starting at a calculated destination
const continueArc = (x_origin, y_origin, radius, degree, angle_1, angle_2, counterclockwise) => {
    DestDefine(x_origin, y_origin, radius, degree);
    context.arc(x, y, radius, radian(angle_1), radian(angle_2), counterclockwise);    
} 

// Function to draw a corner-shaped background with a specific color
async function backgroundDrawCorner(x1, y1, x2, y2, x3, y3, color) {
    chooseColor(color);
    context.moveTo(x1, y1);
    await turn(350);
    context.lineTo(x2, y2);
    await turn(350);
    context.lineTo(x_center, y_center);
    await turn(350);
    context.lineTo(x3, y3);
    await turn(350);
    await newPath();
}

// Function to draw a side-shaped background with a specific color
async function backgroundDrawSide(x1, y1, x2, y2, color) {
    chooseColor(color);
    context.moveTo(x1, y1);
    await turn(350);
    context.lineTo(x_center, y_center);
    await turn(350);
    context.lineTo(x2, y2);
    await turn(350);
    await newPath();
}

// Function to set the current fill and stroke color
const chooseColor = (color) => {
    context.fillStyle = color;
    context.strokeStyle = color;
}

// Function to complete the current path, apply the stroke and fill, and start a new path
async function newPath() {
    context.closePath();
    await turn(500);
    context.fill();
    context.beginPath();
}

// Creating break functions to make the drawing process animated
const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function turn(ms) {
    context.stroke();
    await sleep(ms);
}

// Main function to draw the Brawl Stars logo
async function drawBrawlStarsLogo(context) {
    button.style.visibility = "hidden";
    // Set the center coordinates of the canvas
    x_center = context.canvas.width / 2;
    y_center = context.canvas.height / 2;
    // Start drawing the logo
    context.beginPath();
    // Draw orange corners for the background
    await backgroundDrawCorner(1000, 1000, 500, 1000, 1000, 800, 'rgb(232,116,43)');
    await backgroundDrawCorner(0, 1000, 500, 1000, 0, 800, 'rgb(255,184,32)');
    await backgroundDrawCorner(1000, 0, 500, 0, 1000, 200, 'rgb(254,226,91)');
    await backgroundDrawCorner(0, 0, 500, 0, 0, 200, 'rgb(255,255,255)');
    // Draw orange sides for the background
    await backgroundDrawSide(1000, 200, 1000, 800, 'rgb(255,184,32)');
    await backgroundDrawSide(0, 200, 0, 800, 'rgb(254,226,91)');
    // Draw a "glare" part at the bottom (which creates 3D effect), the circle is covered by the black circle created later
    chooseColor('rgb(254,226,91)');
    DestDefine(x_center, y_center, 35, 110);
    context.arc(x, y, 400, 0, radian(360));
    await newPath();
    // Draw a black circular border
    chooseColor('rgb(0, 0, 0)');
    context.arc(x_center, y_center, 400, 0, radian(360));
    await newPath();
    // Draw the skull (without jaw)
    chooseColor('rgb(250, 188, 36)')
    context.arc(x_center, y_center, 345, radian(8), radian(196), true);
    await turn(350);
    moveDest(x_center, y_center, 345, 196);
    x_endPoint = xDefine(x_center, 345, 8);
    y_endPoint = yDefine(y_center, 345, 8);
    x_controlPoint1 = xDefine(x_center, 510, 148);
    y_controlPoint1 = yDefine(y_center, 510, 148);
    x_controlPoint2 = xDefine(x_center, 510, 56);
    y_controlPoint2 = yDefine(y_center, 510, 56);
    context.bezierCurveTo(x_controlPoint1, y_controlPoint1, x_controlPoint2, y_controlPoint2, x_endPoint, y_endPoint);
    await turn(350);
    // Draw the jaw part
    x = xDefine(x_center, 310, 140);
    y = yDefine(y_center, 260, 140);
    context.moveTo(x, y);
    lineDest(x, y, 40, 102);
    await turn(350);
    continueArc(x, y, 36, 12, 192, 102, true);
    await turn(350);
    DestDefine(x, y, 36, 102);
    lineDest(x, y, 324, 12);
    await turn(350);
    continueArc(x, y, 36, 282, 102, 12, true);
    await turn(350);
    DestDefine(x, y, 36, 12);
    lineDest(x, y, 40, 282);
    await turn(350);
    x = xDefine(310, 140);
    y = yDefine(260, 140);
    context.lineTo(x, y);
    // Draw a pair of eyes
    await newPath();
    chooseColor('rgb(0, 0, 0)');
    DestDefine(x_center, y_center, 165, 176);
    context.arc(x, y, 105, 0, radian(360));
    await turn(350);
    moveDest(x_center, y_center, 165, 28);
    DestDefine(x_center, y_center, 165, 28);
    context.arc(x, y, 105, 0, radian(360));
    // Draw a nose
    await newPath();
    moveDest(x_center, y_center, 90, 102);
    lineDest(x, y, 100, 72);
    await turn(350);
    lineDest(x, y, 100, 192);
    // Draw eyebrows 
    await newPath();
    moveDest(x_center, y_center, 73, 255);
    for (let i = 0; i <= 1; i++) {
        lineDest(x, y, 67, 235 - 180 * i);
        await turn(350);
        continueArc(x, y, 22, 145 + 180 * i, 325 - 180 * i, 145 + 180 * i, true);
        await turn(350);
        moveDest(x, y, 22, 145 + 180 * i);
    }
    await newPath();
    moveDest(x_center, y_center, 73, 309);
    for (let i = 0; i <= 1; i++) {
        lineDest(x, y, 67, 329 - 180 * i);
        await turn(350);
        continueArc(x, y, 22, 59 + 180 * i, 239 - 180 * i, 59 + 180 * i, false);
        await turn(350);
        moveDest(x, y, 22, 59 + 180 * i);
    }
    // Draw the "glare" of the skull with the white ellipse
    await newPath();
    chooseColor('rgb(255, 255, 255)');
    DestDefine(x_center, y_center, 250, 250);
    context.ellipse(x, y, 120, 75, radian(340), 0, radian(360), false)
    context.closePath();
    context.stroke();
    await turn(500);
    context.fill();
    button.style.visibility = "visible";
}


