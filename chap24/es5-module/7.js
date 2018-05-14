//主题对象的构造和原型:寄生组合继承
function Person(name, age) {
    Robin.ProJS.Event.EventTarget.call(this);
    this.name = name;
    this.age = age;
}
Robin.ProJS.Object.inheritPrototype(Person, Robin.ProJS.Event.EventTarget);
Person.prototype.say = function (message) {
    this.fire({type: "message", message: message});
};
//新建:主体对象
function handleMessage(event) {
    console.log(event.target.name, ' MESSAGE RECEIVE:', event.message);
}
//新建:观察者对象
var person = new Person("robin", 29);
//两者建立关联(事件类型，如click)
person.addHandler("message", handleMessage);
//主体对象事件触发
person.say("HELLO,ROBIN");//robin  MESSAGE RECEIVE: HELLO,ROBIN

