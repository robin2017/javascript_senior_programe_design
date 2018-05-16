//part1:20个现场更新
(function () {
    var list = document.getElementById("myList"),
        item,
        i;//声明放在一起
    for (i = 0; i < 10; i++) {
        item = document.createElement("li");
        list.appendChild(item);//dom.appendChild 现场更新
        item.appendChild(document.createTextNode("item" + i));//dom.appendChild 现场更新
    }
})();
//part2:1个现场更新
(function () {
    var list = document.getElementById("myList"),
        fragment = document.createDocumentFragment(),
        item,
        i;//声明放在一起
    for (i = 0; i < 10; i++) {
        item = document.createElement("li");
        fragment.appendChild(item);//fragment.appendChild 不是现场更新
        item.appendChild(document.createTextNode("item" + i));
    }
    list.appendChild(fragment);//dom.appendChild 现场更新
})();
