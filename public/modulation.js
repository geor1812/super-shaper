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