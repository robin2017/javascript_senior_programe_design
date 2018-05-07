function Person() {}
var person = new Person();
console.log(Person.prototype == person.__proto__);//true
console.log(Person.prototype == Object.getPrototypeOf(person));//true


