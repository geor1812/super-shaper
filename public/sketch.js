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
  if(mod.on1) {
    mod.mChange1 += mod.speed1 / 100000;
    ss1.m = map(sin(mod.mChange1), -1, 1, mod.ll1, mod.ul1);
  }

  if(mod.on2) {
    mod.mChange2 += mod.speed2 / 100000;
    ss2.m = map(sin(mod.mChange2), -1, 1, mod.ll2, mod.ul2);
  }
  
  if(camera.rX) {
    rotateX(millis() / 1000);
  }
  
  if(camera.rY) {
    rotateY(millis() / 1000); 
  }

  if(camera.rZ) {
    rotateZ(millis() / 1000);
  }
  
  superShape.computeVertices();

  background(style.bgColor);

  stroke(style.strokeColor);
  strokeWeight(style.strokeW);
  fill(style.fillColor);
  superShape.draw(style.material);

 
  capturer.capture(canvas);
}

//Recording
function keyPressed() {
  if (key === "z") {
    capturer.start();
  }
  if (key === "x") {
    capturer.save();
    capturer.stop();
  } 
}


//Modulation
const on1 = document.getElementById("on1");
const on2 = document.getElementById("on2");

on1.addEventListener("change", () => {
  if(on1.checked) {
    mod.on1 = true;
  } else {
    mod.on1 = false;
  }
});

on2.addEventListener("change", () => {
  if(on2.checked) {
    mod.on2 = true;
  } else {
    mod.on2 = false;
  }
});

const ll1 = document.getElementById("ll1");
const ul1 = document.getElementById("ul1");
const speed1 = document.getElementById("speed1");

ll1.addEventListener("change", () => {
  mod.ll1 = ll1.value;  
});

ul1.addEventListener("change", () => {
  mod.ul1 = ul1.value;  
});

speed1.addEventListener("change", () => {
  mod.speed1 = speed1.value;
});

const ll2 = document.getElementById("ll2");
const ul2 = document.getElementById("ul2");
const speed2 = document.getElementById("speed2");

ll2.addEventListener("change", () => {
  mod.ll2 = ll2.value;  
});

ul2.addEventListener("change", () => {
  mod.ul2 = ul2.value;  
});

speed1.addEventListener("change", () => {
  mod.speed2 = speed2.value;
});

//Camera
const rotateXCheck = document.getElementById("rX");
const rotateYCheck = document.getElementById("rY");
const rotateZCheck = document.getElementById("rZ");

rotateXCheck.addEventListener("change", () => {
  if(rotateXCheck.checked) {
    camera.rX = true;
  } else {
    camera.rX = false;
  }
});

rotateYCheck.addEventListener("change", () => {
  if(rotateYCheck.checked) {
    camera.rY = true;
  } else {
    camera.rY = false;
  }
});

rotateZCheck.addEventListener("change", () => {
  if(rotateZCheck.checked) {
    camera.rZ = true;
  } else {
    camera.rZ = false;
  }
});

//Style
const bgColor = document.getElementById("bgColor");
const strokeColor = document.getElementById("strokeColor");
const fillColor = document.getElementById("fillColor");
const material = document.getElementById("material");
const strokeW = document.getElementById("strokeW");

/*
const form = document.getElementById("imgForm");
async function handleForm(e) {
  e.preventDefault();
  const otherParams = {
    method: "POST",
    body: new FormData(form)
  }
  await fetch(form.action, otherParams);
  fileName = document.getElementById("bgImg").files[0].name;
  style.bgImg = await loadImage(`/uploads/${fileName}`);
  console.log(style.bgImg);
  style.imgMode = true;
}
form.addEventListener('submit', handleForm);
*/

bgColor.addEventListener("change", () => {
  style.bgColor = bgColor.value;
});

strokeColor.addEventListener("change", () => {
  style.strokeColor = strokeColor.value;
});

fillColor.addEventListener("change", () => {
  style.fillColor = fillColor.value;
});

material.addEventListener("change", () => {
  style.material = material.value;
});

strokeW.addEventListener("change", (e) => {
  style.strokeW = strokeW.value;
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

total.addEventListener("change", () => {
  superShape.total = total.value;
  setup();
});

r.addEventListener("change", () => {
  superShape.r = r.value;
  setup();
})

ss1n1.addEventListener("change", () => {
  superShape.ss1.n1 = ss1n1.value;
  setup();
});

ss1n2.addEventListener("change", () => {
  superShape.ss1.n2 = ss1n2.value;
  setup();
});

ss1n3.addEventListener("change", () => {
  superShape.ss1.n3 = ss1n3.value;
  setup();
});

ss1m.addEventListener("change", () => {
  superShape.ss1.m = ss1m.value;
  setup();
});

ss1a.addEventListener("change", () => {
  superShape.ss1.a = ss1a.value;
  setup();
});

ss1b.addEventListener("change", () => {
  superShape.ss1.b = ss1b.value;
  setup();
});

ss2n1.addEventListener("change", () => {
  superShape.ss2.n1 = ss2n1.value;
  setup();
});

ss2n2.addEventListener("change", () => {
  superShape.ss2.n2 = ss2n2.value;
  setup();
});

ss2n3.addEventListener("change", () => {
  superShape.ss2.n3 = ss2n3.value;
  setup();
});

ss2m.addEventListener("change", () => {
  superShape.ss2.m = ss2m.value;
  setup();
});

ss2a.addEventListener("change", () => {
  superShape.ss2.a = ss2a.value;
  setup();
});

ss2b.addEventListener("change", () => {
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