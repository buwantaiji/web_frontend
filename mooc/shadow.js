var discipline = document.getElementById("discipline");
var sections = discipline.getElementsByTagName("section");
for(var i = 0; i < sections.length; i++) {
    sections[i].onmouseover = function() {
       this.style.boxShadow = "0 0 10px rgba(0, 0, 0, .7)"; 
    }
    sections[i].onmouseout = function() {
       this.style.boxShadow = "none"; 
    }
}
