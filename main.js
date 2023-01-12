import './style.css';

function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "navegador") {
        x.className += " responsive";
    } else {
        x.className = "navegador";
    }
}