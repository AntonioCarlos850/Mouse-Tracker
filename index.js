$(document).ready(function() {
var sonar = document.querySelector('#sonar');

document.onmousemove = (event) => {
    var x = event.clientX * 100 / window.innerWidth + "%";
    var y = event.clientY * 100 / window.innerHeight + "%";
    
    sonar.style.transition = "0s";
    sonar.style.left = x;
    sonar.style.top = y;
}

document.onmouseout = (event) => {
    sonar.style.transition = "4s";
    sonar.style.left = "50%"; 
    sonar.style.top = "50%";
}

});