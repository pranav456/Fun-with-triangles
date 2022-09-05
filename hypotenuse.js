const sides = document.querySelectorAll(".side-input");
const hypoBtn = document.querySelector("#hyp-btn");
const outputEle = document.querySelector("#output");

function calcHyp(a, b) {
  const c = Math.sqrt(a * a + b * b).toFixed(2);
  outputEle.innerText = "The hypotenuse is " + c;
}

function btnClick() {
  const a = Number(sides[0].value);
  const b = Number(sides[1].value);

  if (a > 0 && b > 0) {
    calcHyp(a, b);
  } else {
    outputEle.innerText = "Please provide correct input";
  }
}

hypoBtn.addEventListener("click", btnClick);
