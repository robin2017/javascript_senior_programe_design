function PersonType(name) {
    this.name = name;
    this.sayName = function () {
        console.log("hello:", this.name);
    }
}
var person = new PersonType("robin");
person.sayName();


