if (localStorage.getItem('theme') == null) {
    localStorage.setItem('theme', 'light');
} else {
    document.body.classList.add(localStorage.getItem('theme'))
}

document.getElementById("defaultOpenTab").click();

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
function toggleTab(evt, tab) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " active";
}