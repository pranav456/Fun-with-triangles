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
    outputElement.innerHTML =
      "It's a triangle. Sum of all the 3 sides equals 180°";
  } else if (sumOfAngles < 180 || sumOfAngles > 180) {
    outputElement.innerHTML = "Sum of all the angles do not form a triangle";
  } else {
    outputElement.innerHTML = "Please provide correct input";
  }
}

isTrianglebtn.addEventListener("click", isTriangle);
