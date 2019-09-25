var box = document.getElementById("box");
var container = document.getElementById("container");
box.onclick = function() {
    window.setInterval(move, 10);
}
var direction = "right";
var position = Number(box.style.left.slice(0, -2));
var box_width = Number(box.style.width.slice(0, -2));
var container_width = Number(container.style.width.slice(0, -2));
function move() {
    function moveDir(speed) {
        if(direction == "right")
            position += speed;
        else
            position -= speed;
        box.style.left = position + "px";
    }
    function touchEdge() {
        return (position <= 0
                || (position + box_width >= container_width));
    }
    function changeDir() {
        if (direction == "right")
            direction = "left";
        else
            direction = "right";
    }
    moveDir(3);
    if(touchEdge())
        changeDir();
}
