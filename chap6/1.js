var person = {};
person.name = "robin";
person.sayName = function () {
    console.log("hello:",this.name);
};
person.sayName();

