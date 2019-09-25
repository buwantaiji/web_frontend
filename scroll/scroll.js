var content = document.getElementById("content");
var olist = content.getElementsByTagName("ol")[0];

var appendingOlist = document.createElement("ol");
appendingOlist.innerHTML = olist.innerHTML;
content.appendChild(appendingOlist);

var scrollTimer;

// This function set a continous scrolling of a list content.
function setScroll() {
    scrollTimer = setInterval(scroll, 50);
    function scroll() {
        content.scrollTop += 1;
        if(content.scrollTop >= olist.offsetHeight)
            content.scrollTop = 0;
    }
    content.onmouseover = function() {
        clearInterval(scrollTimer);
    }
    content.onmouseout = function() {
        scrollTimer = setInterval(scroll, 50);
    }
}

//setScroll();

// ===========================================================================================================
var scrollDelayTimer;

// This function set content scrolling with a delay time(ms) during every list items being scrolled.
function setScrollWithDelay(delayTime) {
    // itemHeight = the height of individual list item in the scrolling list.
    var itemHeight = olist.offsetHeight / olist.getElementsByTagName("li").length;

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
        content.scrollTop += 1;
        if(content.scrollTop % itemHeight == 0) {
            clearInterval(scrollTimer);
            delaying = true;
            scrollDelayTimer = setTimeout(delayScroll, delayTime);
        }
        if(content.scrollTop >= olist.offsetHeight)
            content.scrollTop = 0;
    }
    content.onmouseover = function() {
        if(delaying)
            clearTimeout(scrollDelayTimer);
        else
            clearInterval(scrollTimer);
    }
    content.onmouseout = function() {
        if(delaying)
            scrollDelayTimer = setTimeout(delayScroll, delayTime);
        else
            scrollTimer = setInterval(unitScroll, 50);
    }
}

setScrollWithDelay(1000);
