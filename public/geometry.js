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
});

r.addEventListener("change", () => {
  superShape.r = r.value;
})

ss1n1.addEventListener("change", () => {
  superShape.ss1.n1 = ss1n1.value;
});

ss1n2.addEventListener("change", () => {
  superShape.ss1.n2 = ss1n2.value;
});

ss1n3.addEventListener("change", () => {
  superShape.ss1.n3 = ss1n3.value;
});

ss1m.addEventListener("change", () => {
  superShape.ss1.m = ss1m.value;
});

ss1a.addEventListener("change", () => {
  superShape.ss1.a = ss1a.value;
});

ss1b.addEventListener("change", () => {
  superShape.ss1.b = ss1b.value;
});

ss2n1.addEventListener("change", () => {
  superShape.ss2.n1 = ss2n1.value;
});

ss2n2.addEventListener("change", () => {
  superShape.ss2.n2 = ss2n2.value;
});

ss2n3.addEventListener("change", () => {
  superShape.ss2.n3 = ss2n3.value;
});

ss2m.addEventListener("change", () => {
  superShape.ss2.m = ss2m.value;
});

ss2a.addEventListener("change", () => {
  superShape.ss2.a = ss2a.value;
});

ss2b.addEventListener("change", () => {
  superShape.ss2.b = ss2b.value;
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