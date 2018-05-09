function SuperType(name) {
    this.name = name;//父亲继承属性：私有
    this.colors = []; //父亲继承属性：私有
}
SuperType.prototype.sayName = function () {//原型方法：共享
    console.log(this.name);
};
function SuberType(name, age) {
    SuperType.call(this, name);
    this.age = age;//实例属性:私有
}
SuberType.prototype = new SuperType();
SuberType.prototype.sayAge = function () {//原型方法：共享
    console.log(this.age)
};
var instance1 = new SuberType("robin", 18);
instance1.colors.push("red");
var instance2 = new SuberType("peter", 20);
instance1.sayName();//robin
instance1.sayAge();//18
console.log(instance1.colors);//[ 'red' ]
instance2.sayName();//peter
instance2.sayAge();//20
console.log(instance2.colors);//[]
