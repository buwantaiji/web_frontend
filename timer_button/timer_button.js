var button = document.getElementById("button");
button.onclick = function() {
    button.disabled = "true";
    var time = 10;
    button.value = time.toString() + "秒后重试";
    var timer = setInterval(countdown, 1000);
    
    function countdown() {
        time--;
        if(time < 0) {
            clearInterval(timer);
            button.disabled = "";
            button.value = "发送验证码";
            return;
        }
        button.value = time.toString() + "秒后重试";
    }
}
