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