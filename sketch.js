let ss1 = new SuperShape(1, 1, 1, 4, 1, 1);
let ss2 = new SuperShape(1, 1, 1, 0, 1, 1);

let superShape = new SuperShape3D(ss1, ss2, 4, 200);
let style = {
  imgMode: false,
  bgColor: null,
  strokeColor: null,
  fillColor: null,
  material: document.getElementById("material").value,
  strokeW: document.getElementById("strokeW").value,
  bgImg: null
}

function setup() {
  //Create p5 canvas for 3D with WEBGL
  const cWidth = document.getElementById("canvasDiv").clientWidth;
  const cHeight = document.getElementById("canvasDiv").clientHeight;
  let canvas = createCanvas(cWidth, cHeight, WEBGL);
  canvas.parent("canvasDiv");
  
  //Enable Camera
  createEasyCam();
  //Suppressing right-click context menu
  document.oncontextmenu = function() { return false; }

  //Defining the default 3D Supershape

  style.bgColor = color(document.getElementById("bgColor").value);
  style.strokeColor = color(document.getElementById("strokeColor").value);
  style.fillColor = color(document.getElementById("fillColor").value);
  style.bgImg = loadImage(document.getElementById("bgImg").value);

  initGeometryInputs();
  superShape.computeVertices();
}

function draw() {
  if(style.imgMode) {
    background(style.bgImg);
  } else {
    background(style.bgColor);
  }
  stroke(style.strokeColor);
  strokeWeight(style.strokeW);
  //lights();
  if(style.material === "mesh") {
    superShape.drawMesh();
  }
}

//Style
const bgColor = document.getElementById("bgColor");
const strokeColor = document.getElementById("strokeColor");
const fillColor = document.getElementById("fillColor");
const material = document.getElementById("material");
const strokeW = document.getElementById("strokeW");
const bgImg = document.getElementById("bgImg");

bgColor.addEventListener("change", (e) => {
  style.bgColor = bgColor.value;
});

strokeColor.addEventListener("change", (e) => {
  style.strokeColor = strokeColor.value;
});

fillColor.addEventListener("change", (e) => {
  style.fillColor = fillColor.value;
});

material.addEventListener("change", (e) => {
  style.material = material.value;
});

strokeW.addEventListener("change", (e) => {
  style.strokeW = strokeW.value;
});

bgImg.addEventListener("change", (e) => {
  setup();
});

//Geometry
const total = document.getElementById("total");
const r = document.getElementById("r");
const ss1n1 = document.getElementById("ss1n1");
const ss1n2 = document.getElementById("ss1n2");
const ss1n3 = document.getElementById("ss1n3");
const ss1m = document.getElementById("ss1m");
const ss1a = document.getElementById("ss1a");
const ss1b = document.getElementById("ss1b");
const ss2n1 = document.getElementById("ss2n1");
const ss2n2 = document.getElementById("ss2n2");
const ss2n3 = document.getElementById("ss2n3");
const ss2m = document.getElementById("ss2m");
const ss2a = document.getElementById("ss2a");
const ss2b = document.getElementById("ss2b");

total.addEventListener("change", (e) => {
  superShape.total = total.value;
  setup();
});

r.addEventListener("change", (e) => {
  superShape.r = r.value;
  setup();
})

ss1n1.addEventListener("change", (e) => {
  superShape.ss1.n1 = ss1n1.value;
  setup();
});

ss1n2.addEventListener("change", (e) => {
  superShape.ss1.n2 = ss1n2.value;
  setup();
});

ss1n3.addEventListener("change", (e) => {
  superShape.ss1.n3 = ss1n3.value;
  setup();
});

ss1m.addEventListener("change", (e) => {
  superShape.ss1.m = ss1m.value;
  setup();
});

ss1a.addEventListener("change", (e) => {
  superShape.ss1.a = ss1a.value;
  setup();
});

ss1b.addEventListener("change", (e) => {
  superShape.ss1.b = ss1b.value;
  setup();
});

ss2n1.addEventListener("change", (e) => {
  superShape.ss2.n1 = ss2n1.value;
  setup();
});

ss2n2.addEventListener("change", (e) => {
  superShape.ss2.n2 = ss2n2.value;
  setup();
});

ss2n3.addEventListener("change", (e) => {
  superShape.ss2.n3 = ss2n3.value;
  setup();
});

ss2m.addEventListener("change", (e) => {
  superShape.ss2.m = ss2m.value;
  setup();
});

ss2a.addEventListener("change", (e) => {
  superShape.ss2.a = ss2a.value;
  setup();
});

ss2b.addEventListener("change", (e) => {
  superShape.ss2.b = ss2b.value;
  setup();
});


initGeometryInputs = () => {
  total.value = superShape.total;
  r.value = superShape.r;
  ss1n1.value = superShape.ss1.n1;
  ss1n2.value = superShape.ss1.n2;
  ss1n3.value = superShape.ss1.n3;
  ss1m.value = superShape.ss1.m;
  ss1a.value = superShape.ss1.a;
  ss1b.value = superShape.ss1.b;
  ss2n1.value = superShape.ss2.n1;
  ss2n2.value = superShape.ss2.n2;
  ss2n3.value = superShape.ss2.n3;
  ss2m.value = superShape.ss2.m;
  ss2a.value = superShape.ss2.a;
  ss2b.value = superShape.ss2.b;
}