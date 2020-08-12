const circle = document.getElementById("circle");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
let num = 0;
let rotateValue = circle.style.transform;
let rotateSum;

leftArrow.onclick = function () {
    let activeFeature = document.getElementById(num);
    let nextFeature;
    if (num == 0)
        nextFeature = document.getElementById(5 - num - 1);
    else
        nextFeature = document.getElementById(num - 1);
    activeFeature.classList.remove("active");
    activeFeature.classList.add("inactive");
    nextFeature.classList.remove("inactive");
    nextFeature.classList.add("active");
    num = nextFeature.id;
    rotateSum = rotateValue + "rotate(-72deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}

rightArrow.onclick = function () {
    let activeFeature = document.getElementById(num);
    let nextFeature;
    if (num == 4)
        nextFeature = document.getElementById(4 - parseInt(num));
    else
        nextFeature = document.getElementById(parseInt(num) + 1);
    activeFeature.classList.remove("active");
    activeFeature.classList.add("inactive");
    nextFeature.classList.remove("inactive");
    nextFeature.classList.add("active");
    num = nextFeature.id;
    rotateSum = rotateValue + "rotate(72deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}