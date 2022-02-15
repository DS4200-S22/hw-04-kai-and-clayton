function circle3Clicked() {
  let circle3 = document.getElementById("circle3");
  if (circle3.style.opacity == 0) {
    circle3.style.opacity = 1;
  } else {
    circle3.style.opacity = 0;
  }
}

function fillInBorder() {
  let circle2 = document.getElementById("circle2");
  circle2.style.stroke = "black";
}

function disappearBorder() {
  let circle2 = document.getElementById("circle2");
  circle2.style.stroke = "blue";
}

let value = 0;

function circle1Clicked() {
  value++;
  document.getElementById("number").textContent = value;
}
