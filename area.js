const sides = document.querySelectorAll(".side-input");
const areaBtn = document.querySelector("#area-btn");
const outputEle = document.querySelector("#output");

function calcArea(b, h) {
  const area = (b * h) / 2;
  outputEle.innerText = "area is " + area;
}

function btnClick() {
  const b = Number(sides[0].value);
  const h = Number(sides[1].value);

  if (b > 0 && h > 0) {
    calcArea(b, h);
  } else {
    outputEle.innerText = "Please provide the correct input";
  }
}

areaBtn.addEventListener("click", btnClick);
