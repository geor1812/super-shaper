let capturer = new CCapture ({
  format: "webm",
  framerate: 30,
  verbose: true
});

let ss1 = new SuperShape(0.249, 47.81, -0.86, 6, 1, 1);
let ss2 = new SuperShape(-76.88, 0.52, -56.7, 7, 1, 1);
let superShape = new SuperShape3D(ss1, ss2, 3, 200);

let style = {
  bgColor: null,
  strokeColor: null,
  fillColor: null,
  material: document.getElementById("material").value,
  strokeW: document.getElementById("strokeW").value,
}

let camera = {
  rX: false,
  rY: false,
  rZ: false,
}

let easyCam;
let mod = {
  on1 : false,
  ll1 : 0,
  ul1 : 10,
  speed1: 1,
  mChange1: 0,
  on2 : false,
  ll2 : 0,
  ul2 : 10,
  speed2: 1,
  mChange2: 0
}

function setup() {
  //Create p5 canvas for 3D with WEBGL
  const cWidth = document.getElementById("canvasDiv").clientWidth;
  const cHeight = document.getElementById("canvasDiv").clientHeight;
  let canvas = createCanvas(cWidth, cHeight, WEBGL);
  canvas.parent("canvasDiv");
  
  //Enable Camera
  easyCam = createEasyCam();
  //Suppressing right-click context menu
  document.oncontextmenu = function() { return false; }

  //Defining the default 3D Supershape

  style.bgColor = color(document.getElementById("bgColor").value);
  style.strokeColor = color(document.getElementById("strokeColor").value);
  style.fillColor = color(document.getElementById("fillColor").value);

  initGeometryInputs();
}

function draw() {
  //Modulation
  if(mod.on1) {
    mod.mChange1 += mod.speed1 / 100000;
    ss1.m = map(sin(mod.mChange1), -1, 1, mod.ll1, mod.ul1);
  }

  if(mod.on2) {
    mod.mChange2 += mod.speed2 / 100000;
    ss2.m = map(sin(mod.mChange2), -1, 1, mod.ll2, mod.ul2);
  }
  
  //Camera rotation
  if(camera.rX) {
    rotateX(millis() / 1000);
  }
  
  if(camera.rY) {
    rotateY(millis() / 1000); 
  }

  if(camera.rZ) {
    rotateZ(millis() / 1000);
  }
  
  //Computing and drawing
  superShape.computeVertices();

  background(style.bgColor);

  stroke(style.strokeColor);
  strokeWeight(style.strokeW);
  fill(style.fillColor);
  superShape.draw(style.material);

  //Saving frame
  capturer.capture(canvas);
}

//Recording trigger
function keyPressed() {
  if (key === "z") {
    capturer.start();
  }
  if (key === "x") {
    capturer.save();
    capturer.stop();
  } 
}