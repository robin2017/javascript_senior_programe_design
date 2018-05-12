(function () {
    var privateVariable = 10;
    //函数声明：私有
    function privateFunction() {
        return false;
    }
    //未声明函数表达式：全局共有
    MyObject = function () {};
    MyObject.prototype.publicMethod = function () {
        console.log(privateVariable);//10
        console.log(privateFunction());//false
    }
})();
var object = new MyObject();
object.publicMethod();