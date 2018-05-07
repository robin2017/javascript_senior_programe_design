function createPerson(name) {
    var person = {};
    person.name = name;
    person.sayName = function () {
        console.log("hello:", this.name);
    };
    return person;
}
var person = createPerson("robin");
person.sayName();

