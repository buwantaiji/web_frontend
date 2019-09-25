var select = document.getElementById("select");
var dropmenu = document.getElementById("dropmenu");

var items = dropmenu.getElementsByTagName("li");
var index = -1;

select.onclick = function(event) {
    dropmenu.style.display = "block";
    event.stopPropagation();
}
document.onclick = function() {
    dropmenu.style.display = "none";
    for(var i = 0; i < items.length; i++)
        items[i].style.backgroundColor = "#fff";
    index = -1;
}

for(var i = 0; i < items.length; i++) {
    items[i].onmouseover = mouseoverHandler(i);
    /* Again here, we used a closure to deliver the variable "i" immediately into the event handler function, 
         namely, "mouseoverHandler".
       We also noticed that the unique role the keyword "this" played!
       More knowledge about functional programming should be explored and studied!
     */
    function mouseoverHandler(i) {
        function wrapper() {
            items[i].style.backgroundColor = "#666";
            index = i;
        }
        return wrapper;
    }

    items[i].onmouseout = function() {
        this.style.backgroundColor = "#fff";
        index = -1;
    }
    items[i].onclick = function(event) {
        select.innerHTML = this.innerHTML;
        dropmenu.style.display = "none";
        event.stopPropagation();
    }

}

document.onkeydown = function(event) {
    if(dropmenu.style.display == "none")
        return;
    switch(event.key) {
        case "ArrowDown":
            if(index != -1)
                items[index].style.backgroundColor = "#fff";
            index = (index + 1) % items.length;
            items[index].style.backgroundColor = "#666";
            break;
        case "ArrowUp":
            if(index != -1) {
                items[index].style.backgroundColor = "#fff";
                index = (index - 1 + items.length) % items.length;
            }
            else
                index = items.length - 1;
            items[index].style.backgroundColor = "#666";
            break;
        case "Enter":
            select.innerHTML = items[index].innerHTML;
            dropmenu.style.display = "none";
            for(var i = 0; i < items.length; i++)
                items[i].style.backgroundColor = "#fff";
            index = -1;
    }
}
