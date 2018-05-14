function updateUIBad() {
    var imgs = document.getElementsByTagName("img");
    for (var i = 0, len = imgs.length; i < len; i++) {
        imgs[i].title = document.title + "image" + i;
    }
    var msg = document.getElementById("msg");
    msg.innerHTML = "update complate"
}
//2+n次全局搜索变成1次
function updateUIGood() {
    var doc = document;
    var imgs = doc.getElementsByTagName("img");
    for (var i = 0, len = imgs.length; i < len; i++) {
        imgs[i].title = doc.title + "image" + i;
    }
    var msg = doc.getElementById("msg");
    msg.innerHTML = "update complate"
}