function Person() {
}
Person.prototype.name = "robin";
Person.prototype.sayName = function () {
    //this会沿着原型链向上搜索，不会沿着作用域链
    console.log("hello:", this.name);
};
var person = new Person();
person.sayName();
