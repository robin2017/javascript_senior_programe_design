//特殊函数1-构造函数:返回对象的函数
var obj = new Object();

//特殊函数2-闭包:返回函数的函数
function closure() {
    var tmp = 1;
    function impl() {
        console.log(tmp);
    }
    return impl
}

