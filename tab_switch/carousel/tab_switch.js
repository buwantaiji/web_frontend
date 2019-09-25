/* Here, we have used almost the same javascript program(namely, tab_switch.js) to achive the implements
     of the carousel figure effect.
   The basic logic and algorithms are the same, except the dom interface of the html page, as well as
     the "changeRepresentation" function which counts for the visual change of the page.
 */
var tabs = document.getElementById("tabs").getElementsByTagName("li");
var sections = document.getElementById("images").getElementsByTagName("li");

for(var i = 0; i < tabs.length; i++) {
    var link = tabs[i].getElementsByTagName("a")[0];
    
    // VERSION 1 ******************************************************************************************
    /* Change the left side of this statement to "link.onclick" can immediately 
         realize the tab switching when the corresponding tab is clicked. 
     */
//    link.onmouseover = selectTab(i);

    /* This function implements the core functionality in the "representation aspect",
         namely change the tab labeled "index" to the selected state, through manipulation of
         the dom tree.
     */
    function changeRepresentation(index) {
        for(var j = 0; j < tabs.length; j++) {
            var link = tabs[j].getElementsByTagName("a")[0];
            if(j == index) {
                link.setAttribute("class", "selected");
                sections[j].setAttribute("class", "visible");
            }
            else {
                link.setAttribute("class", "unselected");
                sections[j].setAttribute("class", "hidden");
            }
        }
    }
    function selectTab(i) {
        function wrapper() {
            changeRepresentation(i);
        }
        return wrapper;
    }

    // VERSION 2 ******************************************************************************************
    /* The delaying version of the tab switching effect. 
       Again, we used a "nested" closure to give through the parameter i. 
     */   
    var timer;
//    link.onmouseover = delaySelectTab(i);
    function delaySelectTab(i) {
        function wrapper() {
            if(timer)
                clearTimeout(timer);
            timer = setTimeout(selectTab(i), 500);
        }
        return wrapper;
    }

    // VERSION 3 ******************************************************************************************
    /* The "automatic" version of the tab switch effect.
       In this case, a repeated timer is set via the "setInterval" method.
     */
    link.onmouseover = disturbAutoSwitch(i);
    function disturbAutoSwitch(i) {
        function wrapper() {
            clearInterval(repeatTimer);
            index = i;
            changeRepresentation(i);
        }
        return wrapper;
    }
    link.onmouseout = setAutoSwitch;
}

var index = 0;
var repeatTimer;
function setAutoSwitch() {
    repeatTimer = setInterval(autoSelectTab, 2000);
    function autoSelectTab() {
        index = (index + 1) % tabs.length;
        changeRepresentation(index);
    }
}
// This statement is used to automatically trigger repeated tab switching effect when the web page has been ready.
setAutoSwitch();
