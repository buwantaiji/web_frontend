document.getElementById("click").onclick = function() {
    setTimeout(function() {
                   window.alert("hello!");
               }, 3000);
}

document.getElementById("window.innerWidth").addEventListener("click", function() {alert(window.innerWidth);});
document.getElementById("window.innerHeight").addEventListener("click", function() {alert(window.innerHeight);});
document.getElementById("window.screen.width").addEventListener("click", function() {alert(window.screen.width);});
document.getElementById("window.screen.height").addEventListener("click", function() {alert(window.screen.height);});
document.getElementById("window.screen.availWidth").addEventListener("click", function() {alert(window.screen.availWidth);});
document.getElementById("window.screen.availHeight").addEventListener("click", function() {alert(window.screen.availHeight);});
document.getElementById("window.screen.colorDepth").addEventListener("click", function() {alert(window.screen.colorDepth);});
document.getElementById("window.screen.pixelDepth").addEventListener("click", function() {alert(window.screen.pixelDepth);});
