//连续计算
window.onresize = function () {
    console.log('---onresize---')
    var div = document.getElementById("myDiv");
    div.style.height = div.offsetWidth + "px";
};


//如果连续移动的时间少于500ms，则不会计算
function throttle(method, time, context) {
    clearTimeout(method.tId);
    method.tId = setTimeout(function () {
        method.call(context);
    }, time)
}
function resizeDiv() {
    console.log('---resizeDiv---');
    var div = document.getElementById("myDiv");
    div.style.height = div.offsetWidth + "px";
}
window.onresize = function () {
    throttle(resizeDiv,200)
};