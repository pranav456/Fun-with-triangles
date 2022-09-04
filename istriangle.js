const inputs = document.querySelectorAll(".angle-input");
const isTrianglebtn = document.querySelector("#is-triangle-btn");
const outputElement = document.querySelector("#output");

function calcSumOfAngles(angle1, angle2, angle3) {
  return angle1 + angle2 + angle3;
}

function isTriangle() {
  angle1 = Number(inputs[0].value);
  angle2 = Number(inputs[1].value);
  angle3 = Number(inputs[2].value);

  const sumOfAngles = calcSumOfAngles(angle1, angle2, angle3);
  if (sumOfAngles === 180) {
    outputElement.innerHTML = "It's a triangle";
  } else if (sumOfAngles < 180) {
    outputElement.innerHTML = "It's not a triangle";
  } else {
    outputElement.innerHTML = "Please provide correct input";
  }
}

isTrianglebtn.addEventListener("click", isTriangle);
