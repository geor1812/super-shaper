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