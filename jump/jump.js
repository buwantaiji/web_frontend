window.onload = function() {
    var para = document.getElementById("para");
    // para.firstChild.nodeValue的值具有"x秒后回到主页"的形式.
    var seconds = Number(para.firstChild.nodeValue.slice(0, 1));
    var timer = window.setInterval(countdown, 1000);
    function countdown() {
        if(seconds < 0) {
            window.clearInterval(timer);
            window.location.assign("http://www.baidu.com");
            return;
        }
        para.firstChild.nodeValue = seconds + para.firstChild.nodeValue.slice(1);
        seconds--;
    }

    para.getElementsByTagName("a")[0].onclick = function() {
        window.history.back();
        return false;
    }
}

