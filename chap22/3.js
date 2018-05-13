var handler = {
    message: "event handled",
    handleClick: function () {
        console.log(this.message);
    }
};
//1、执行环境中，函数内this指向为handler对象
handler.handleClick();
var btn = document.getElementById("mybtn");
//2、非执行环境（事件绑定回调函数）中，this指向dom元素
EventUtil.addHandler(btn, "click", handler.handleClick);
//3、闭包修正，但是代码难于理解
EventUtil.addHandler(btn, "click", function () {
    handler.handleClick()
});
//4、es5的bind()
EventUtil.addHandler(btn, "click", handler.handleClick.bind(handler));
//5、es5之前的bind()实现
EventUtil.addHandler(btn, "click", bind(handler.handleClick, handler));
function bind(fn, context) {
    return function () {
        return fn.apply(context, arguments);
    }
}
