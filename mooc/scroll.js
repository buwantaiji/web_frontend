var container = document.getElementById("scroll-container");
var list = container.getElementsByTagName("ul")[0];

var appendingList = document.createElement("ul");
appendingList.innerHTML = list.innerHTML;
container.appendChild(appendingList);

// ===========================================================================================================
var scrollDelayTimer;

// This function set content scrolling with a delay time(ms) during every list items being scrolled.
function setScrollWithDelay(delayTime) {
    // itemHeight = the height of individual list item in the scrolling list.
    var itemHeight = list.offsetHeight / list.getElementsByTagName("li").length;

    /* The variable "delay" indicates current states of whether the timer "scrollDelayTimer", 
     *   set by "setTimeout" method, was activated and working.
     * If delay = false, the timer "scrollTimer", set by "setInterval" method, was activated and working. 
     */
    var delaying = true;
    scrollDelayTimer = setTimeout(delayScroll, delayTime);

    function delayScroll() {
        delaying = false;
        scrollTimer = setInterval(unitScroll, 50);
    }
    function unitScroll() {
        container.scrollTop += 1;
        if(container.scrollTop % itemHeight == 0) {
            clearInterval(scrollTimer);
            delaying = true;
            scrollDelayTimer = setTimeout(delayScroll, delayTime);
        }
        if(container.scrollTop >= list.offsetHeight)
            container.scrollTop = 0;
    }
    container.onmouseover = function() {
        if(delaying)
            clearTimeout(scrollDelayTimer);
        else
            clearInterval(scrollTimer);
    }
    container.onmouseout = function() {
        if(delaying)
            scrollDelayTimer = setTimeout(delayScroll, delayTime);
        else
            scrollTimer = setInterval(unitScroll, 50);
    }
}

setScrollWithDelay(1000);
