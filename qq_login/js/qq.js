window.onload = function() {
    var panel = document.getElementById("panel");
    setCloseBtn(panel);
    setDragEffect(panel);
    setSelectStatesList();
}
function setCloseBtn(panel) {
    var closebtn = document.getElementById("closebtn");
    closebtn.onclick = function(event) {
        panel.style.display = "none";    
        event.preventDefault();
    }
}
function setDragEffect(panel) {
    var header = document.getElementsByTagName("header")[0].getElementsByTagName("a")[0];
    header.onmousedown = function(event) {
        var relX = event.clientX - panel.offsetLeft,
            relY = event.clientY - panel.offsetTop;
        document.onmousemove = function(event) {
            var offsetX = event.clientX - relX,
                offsetY = event.clientY - relY;
            if(offsetX < 0) offsetX = 0;
            var maxOffsetX = window.innerWidth - panel.offsetWidth;
            if(offsetX > maxOffsetX) offsetX = maxOffsetX;
            if(offsetY < 0) offsetY = 0;
            var maxOffsetY = window.innerHeight - panel.offsetHeight;
            if(offsetY > maxOffsetY) offsetY = maxOffsetY;
            panel.style.left = offsetX + "px";
            panel.style.top = offsetY + "px";
        }
        document.onmouseup = function() {
            document.onmousemove = null;
        }
        event.preventDefault();
    }
}
function setSelectStatesList() {
    var selectstatesblock = document.getElementById("selectstatesblock");
    var select = selectstatesblock.getElementsByTagName("a")[0];
    var stateslist = selectstatesblock.getElementsByTagName("ul")[0];
    select.onclick = function(event) {
        select.style.display = "none";
        stateslist.style.display = "block";
        event.stopPropagation();
    }

    var items = stateslist.getElementsByTagName("a");
    for(var i = 0; i < items.length; i++) {
        items[i].onclick = function() {
            select.setAttribute("class", this.getAttribute("class"));
            select.innerHTML = this.innerHTML;
            select.style.display = "block";
            stateslist.style.display = "none";
            event.stopPropagation();
        }
    }

    document.onclick = function() {
        select.style.display = "block";
        stateslist.style.display = "none";
    }
}
