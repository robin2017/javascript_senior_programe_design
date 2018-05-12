(function () {
    //匿名立即调用函数内的局部变量作为特权变量
    var name = "";
    //未声明的函数表达式：全局公开
    Person = function (val) {
        name = val;
    };
    Person.prototype.getName = function () {
        return name;
    };
    Person.prototype.setName = function (val) {
        name = val;
    }
})();
var person1 = new Person("robin");
var person2 = new Person("perter");
console.log(person1.getName());//peter