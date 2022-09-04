const sides = document.querySelectorAll(".side-input");
const hypoBtn = document.querySelector("#hyp-btn");
const outputEle = document.querySelector("#output");

function calcHyp() {
  const a = Number(sides[0].value);
  const b = Number(sides[1].value);

  const c = Math.sqrt(a * a + b * b);

  outputEle.innerText = "The hypotenuse is " + c;
}

hypoBtn.addEventListener("click", calcHyp);
