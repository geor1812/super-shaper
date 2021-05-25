let globe;
let total = 25;

let m = 0;
let mchange = 0;

let a = 1;
let b = 1;

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

  //Technically a two dimensional array with [total+1][total+1]
  globe = Array((total + 1) * (total + 1));
}

function supershape(theta, m, n1, n2, n3) {
  let t1 = abs((1 / a) * cos(m * theta / 4));
  t1 = pow(t1, n2);
  let t2 = abs((1 / b) * sin(m * theta / 4));
  t2 = pow(t2, n3);
  const t3 = t1 + t2;
  const r = pow(t3, -1 / n1);
  return r;
}

function draw() {
  //m = map(sin(mchange), -1, 1, 0, 10);
  //mchange += 0.02;

  background(0);
  //lights();

  let r = 400;
  for (let i = 0; i < total + 1; i++) {
    const lat = map(i, 0, total, -HALF_PI, HALF_PI);
    const r2 = supershape(lat, 5, 0.1, 1.7, 1.7);
    for (let j = 0; j < total + 1; j++) {
      const lon = map(j, 0, total, -PI, PI);
      const r1 = supershape(lon, 1, 0.3, 0.5, 0.5);
      const x = r * r1 * cos(lon) * r2 * cos(lat);
      const y = r * r1 * sin(lon) * r2 * cos(lat);
      const z = r * r2 * sin(lat);

      //This index works as if it were [i][j]
      const index = i + j * (total + 1);
      globe[index] = createVector(x, y, z);
    } 
  }

  stroke(255, 0, 255);
  strokeWeight(1);
  noFill();
  for (let i = 0; i < total; i++) {
    beginShape(TRIANGLE_STRIP);
    for (let j = 0; j < total + 1; j++) {
      const index1 = i + j * (total + 1);
      const v1 = globe[index1];
      vertex(v1.x, v1.y, v1.z);
      const index2 = (i + 1) + j * (total + 1);
      const v2 = globe[index2];
      vertex(v2.x, v2.y, v2.z);
    }
    endShape();
  }
}