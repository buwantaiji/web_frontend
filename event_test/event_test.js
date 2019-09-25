var para = document.getElementById("position");
var btn = document.getElementById("btn");
var container = document.getElementById("container");
btn.onclick = function(event) {
    alert("The event target: " + event.target.nodeName);
    event.stopPropagation();
}
container.addEventListener("click", function() {
                                        alert('This is a message from the event handler of the parent div element!');
                                    }, false);
var link = document.getElementById("link");
link.onclick = function(event) {
    alert("You clicked a link!");
    event.preventDefault();
    event.stopPropagation();
}
