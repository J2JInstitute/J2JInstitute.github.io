document.getElementById('themeButton').onclick = aaa;

if (localStorage.getItem('theme' == null)) {
    localStorage.setItem('theme', 'dark');
} else {
    document.body.classList.add(localStorage.getItem('theme'))
}

function aaa() {
    if (document.body.classList.contains('dark')) {
        document.body.classList.replace('dark', "light");
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.replace("light", "dark");
        localStorage.setItem('theme', 'dark');
    }
}