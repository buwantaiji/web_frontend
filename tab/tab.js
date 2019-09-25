var subjects = document.getElementById("container").getElementsByClassName("subject");
for(var i = 0; i < subjects.length; i++) {
    var subject = subjects[i].getElementsByTagName("h2")[0];
//    subject.onclick = switch_tab(i);
    function switch_tab(i) {
        function wrapper() {
            for(var j = 0; j < subjects.length; j++) {
                var contents = subjects[j].getElementsByTagName("ul")[0];
                if(j == i)
                    contents.setAttribute("class", "visible");
                else
                    contents.setAttribute("class", "hidden");
            }
        }
        return wrapper;
    }
    subject.onclick = unfold(i);
    function unfold(i) {
        function wrapper() {
            var contents = subjects[i].getElementsByTagName("ul")[0];
            if (contents.getAttribute("class") == "visible")
                contents.setAttribute("class", "hidden");
            else
                contents.setAttribute("class", "visible");
        }
        return wrapper;
    }
}
