function Person() {}
var person = new Person();
Person.prototype = {
    name: 'robin',
    sayName: function () {
        console.log(this.name);
    }
};
person.sayName();
//TypeError: person.sayName is not a function



