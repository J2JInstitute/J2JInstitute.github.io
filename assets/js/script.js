
function toggleNav() {
    var x = document.getElementById("navbarr");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}