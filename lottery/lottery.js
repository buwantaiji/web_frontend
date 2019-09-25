var gifts = ["iphone6s", "ipad mini 4", "惠普笔记本", "佳能相机", "50元手机充值卡", "1000元超市代金券", "谢谢参与"];
var timer;
var startflag = true;

var startbtn = document.getElementById("start");
startbtn.onclick = start;
function start(event) {
    /* Upon test, we discovered that setting the "disabled" attribute of input button can definitely
         disable the usage of this button, including any possibility to handle it through javascript events.
     */
    startbtn.disabled = true;
    startbtn.style.backgroundColor = "#888";
    timer = setInterval(function() {
                            var heading = document.getElementsByTagName("h1")[0];
                            var rand = Math.floor(Math.random() * gifts.length);
                            heading.innerHTML = gifts[rand];
                        }, 50);
    startflag = false;
    event.preventDefault();
}

var stopbtn = document.getElementById("stop");
stopbtn.onclick = stop;
function stop(event) {
    startbtn.disabled = false;
    startbtn.style.backgroundColor = "#036";
    clearInterval(timer); 
    startflag = true;
    event.preventDefault();
}

// keyboard event.
document.onkeypress = function(event) {
    if(event.key == "Enter")
        if(startflag)
            start(event);
        else
            stop(event);
}
