/**
 * Created by robin on 2017/10/8.
 */





var arr = new Array();
console.log(arr)

var str = new String();
console.log(str)


//原型动态性的正面例子：随时添加属性
function Person() {};
var friend = new Person();

Person.prototype.name = 'robin';
Person.prototype.sayName1 = function() {
    console.log(this.name);
};

console.log('---start---')
friend.sayName1()
console.log('---end---')




//原型动态性的反面例子：重写整个原型对象
function Person() {};
var friend = new Person();

Person.prototype = {
    name : 'robin',
    sayName2 : function () {
        console.log(this.name)
    }
}

console.log('---start---')
friend.sayName2()
console.log('---end---')









var person1 = new Person();
person1.sayName();
var person2 = new Person();
person2.sayName();

console.log('-------')
console.log(Object.getPrototypeOf(person1) == Person.prototype)
console.log(Object.toLocaleString())

//构造函数
function Util(){}
//所有的属性和方法放在原型上面
Util.prototype.attr1 = 0;
Util.prototype.attr2 = 0;
Util.prototype.func1 = function () {};
Util.prototype.func2 = function () {};
