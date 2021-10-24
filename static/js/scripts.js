$(function () {
    // init feather icons
    feather.replace();
    // get current year
    document.getElementById("currentYear").innerHTML = new Date().getFullYear();
});