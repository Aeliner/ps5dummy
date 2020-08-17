const circle = document.getElementById("circle");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
let nextFeature;
let num = 0;
let activeFeature = document.getElementById(num);
let rotateSum = 0;


function changeActive(feature1, feature2){
    feature2.classList.remove("active");
    feature2.classList.add("inactive");
    feature1.classList.remove("inactive");
    feature1.classList.add("active");
}

leftArrow.onclick = function () {
    if (num == 0)
        nextFeature = document.getElementById(5 - num - 1);
    else
        nextFeature = document.getElementById(num - 1);
    changeActive(nextFeature, activeFeature);
    activeFeature = nextFeature;
    num = nextFeature.id;
    rotateSum = rotateSum - 72;
    circle.style.transform = "rotate("+rotateSum+"deg)";
}   

rightArrow.onclick = function () {
    if (num == 4)
        nextFeature = document.getElementById(4 - parseInt(num));
    else
        nextFeature = document.getElementById(parseInt(num) + 1);
    changeActive(nextFeature, activeFeature);
    activeFeature = nextFeature;
    num = nextFeature.id;
    rotateSum = rotateSum + 72;
    circle.style.transform = "rotate("+rotateSum+"deg)";
}

