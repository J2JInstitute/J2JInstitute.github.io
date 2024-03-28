if (localStorage.getItem('theme' === null)) {
    localStorage.setItem('theme', 'light');
} else {
    document.body.classList.add(localStorage.getItem('theme'))
}

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
        localStorage.setItem('theme', "dark");
    } else {
        body.className = "light";
        localStorage.setItem('theme', "light");
    }
}