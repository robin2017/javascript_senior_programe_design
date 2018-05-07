//构造函数模式+原型模式
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype = {
    constructor: Person,
    sayName: function () {
        console.log(this.name)
    }
}


//动态原型模式
function Person(name, age) {
    //属性
    this.name = name;
    this.age = age;
    //方法
    if (typeof this.sayName != 'function') {
        Person.prototype.sayName = function () {
            console.log(this.name)
        }
    }
}