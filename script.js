const circle = document.getElementById("circle");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");

let rotateValue = circle.style.transform;
let rotateSum;

leftArrow.onclick = function(){
    rotateSum = rotateValue + "rotate(-72deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}

rightArrow.onclick = function(){
    rotateSum = rotateValue + "rotate(72deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}