/*let globe;
let total = 25;

let m = 0;
let mchange = 0;

let a = 1;
let b = 1;*/

let superShape;

function setup() {
  //Create p5 canvas for 3D with WEBGL
  const cWidth = document.getElementById("canvasDiv").clientWidth;
  const cHeight = document.getElementById("canvasDiv").clientHeight;
  let canvas = createCanvas(cWidth, cHeight, WEBGL);
  canvas.parent("canvasDiv");
  
  //Enable Camera
  createEasyCam();
  //Suppress right-click context menu
  document.oncontextmenu = function() { return false; }
  
  colorMode(HSB, 100);

  //Defining the default 3D Supershape
  let ss1 = new SuperShape(1, 1, 1, 4, 1, 1);
  let ss2 = new SuperShape(1, 1, 1, 0, 1, 1);
  superShape = new SuperShape3D(ss1, ss2, 50, 200);
}

function draw() {
  background(0);
  //lights();

  superShape.computeVertices();
  stroke(255, 0, 255);
  superShape.drawMesh();
}