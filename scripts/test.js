
function run() {
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id", placeholder);
    placeholder.setAttribute("src", "images//18.png");
    placeholder.setAttribute("alt", "18png");
    var ins = document.getElementById("ins");
    ins.parentNode.insertBefore(placeholder, ins);
}

window.onload = function() {
    run();
}
