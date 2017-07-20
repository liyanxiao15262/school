/**
 * Created by 39588 on 2017/7/19.
 */
var tim=null;
var speed=null;


btn[0].onclick=function () {
    move(750)
}



    function  move(numScro) {
        clearInterval(tim);
        tim = setInterval(function () {
            var scrollT = document.documentElement.scrollTop ||
                document.body.scrollTop;
            speed = (numScro - scrollT) / 10;
            speed > 0 ? speed = Math.ceil(speed) : speed = Math.floor(speed);
            if (speed == 0&&numScro==numScro) {
                clearInterval(tim);
                return false;
            } else {
                window.scrollBy(0, speed)
            }
        }, 20)
    }