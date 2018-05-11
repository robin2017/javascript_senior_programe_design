function Person(name) {
    this.setName = function (val) {//这里参数不能同名
        name = val;
    };
    this.getName = function () {
        return name
    }
}
var person = new Person("robin");
console.log(person.getName());//robin
person.setName("peter");
console.log(person.getName());//peter

