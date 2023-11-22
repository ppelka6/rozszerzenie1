function sayHello() {
    var message = document.createTextNode("Witaj świecie!");
    var out = document.createElement("div");
    out.appendChild(message);
    document.body.appendChild(out);
}
window.onload = sayHello;