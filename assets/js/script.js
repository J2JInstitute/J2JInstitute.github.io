
function toggleNav() {
    var x = document.getElementById("navbarr");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

function toggleTheme() {
    var body = document.body;
    if (body.className === "light") {
        body.className = "dark";
    } else {
        body.className = "light";
    }
}