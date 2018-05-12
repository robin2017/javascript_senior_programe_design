(function () {
    var now = new Date();//不会污染全局作用域
    if (now.getMonth() == 0 && now.getDate() == 1) {
        console.log("Happy new year!!")
    }
})();
