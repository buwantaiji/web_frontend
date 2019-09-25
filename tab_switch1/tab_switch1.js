var list = document.getElementById("list");
var items = list.getElementsByTagName("li");
var infoblocks = document.getElementById("infoblock").getElementsByTagName("p");
for(var i = 0; i < items.length; i++)
    /* note: pay close attention to this, where we deliberately use a "closure" ---- namely higher order function
        switchTabWrapper ---- to "wrap" the iterator i into corresponding event handler function.
       Directly writting "... = function() {switchTab();}" wouldn't work!!!
       More details about functional programming should be studied and explored!!!
     */
    items[i].firstChild.onclick = switchTabWrapper(i);

function switchTab(i) {
    for(var j = 0; j < items.length; j++) {
        if(j == i) {
            items[j].setAttribute("class", "switched");
            infoblocks[j].setAttribute("class", "unhidden");
        }
        else {
            items[j].setAttribute("class", "unswitched");
            infoblocks[j].setAttribute("class", "hidden");
        }
    }
}

function switchTabWrapper(i) {
    function wrapper() {
        switchTab(i);
    }
    return wrapper;
}
