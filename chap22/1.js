//普通构造函数
function Person(name,age){
  this.name = name;
  this.age = age;
}
//普通构造函数的正常调用
var person1 = new Person("robin",20);
console.log(person1.name);//robin
//普通构造函数的错误调用
var person2 = Person("perter",18);
//console.log(person2.name);//typeerror
console.log(global.name);//perter
//作用域安全的构造函数
function PersonSafe(name,age) {
  if(this instanceof PersonSafe) {
    this.name = name;
    this.age = age;
  }else {
    return new Person(name,age);
  }
}
//作用域安全构造函数的任意调用
var person3 = new PersonSafe("anli",12);
console.log(person3.name);//anli
var person4 = PersonSafe("hebo",15);
console.log(person4.name);//hebo
