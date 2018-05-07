/**
 * Created by robin on 2017/10/8.
 */

var obj = new Object();
obj.name = 'robin';

//构造函数
function Util(){}
//所有的属性和方法放在原型上面
Util.prototype.attr1 = 0;
Util.prototype.attr2 = 0;
Util.prototype.func1 = function () {};
Util.prototype.func2 = function () {};


var util = new Util();
util.name = 3;

function displayProp1(obj) {
    console.log('come into displayProp1')
    for (var name in obj) {
        console.log(name+' : '+obj[name])
    }
}

displayProp1(obj);
displayProp1(obj.__proto__);


function displayProp2(obj) {
    console.log('come into displayProp2')
    var props = Object.getOwnPropertyNames(obj)
    for (var i = 0;i<props.length;i++) {
        console.log(props[i]+' : '+obj[props[i]])
    }
}
//遍历来自实例的属性
displayProp2(util);
//遍历来自原型的属性
displayProp2(util.__proto__);

console.log(util.hasOwnProperty('name'))
console.log('----test start---')


//实例对象
console.log(hasPrototypeProperty(util,'name'))
//es
console.log(hasPrototypeProperty(util,'toString'))
console.log(hasPrototypeProperty(util,'constructor'))
console.log(hasPrototypeProperty(util,'prototype'))
//dhtml
console.log(hasPrototypeProperty(util,'__proto__'))

//es5 非原型
console.log(util.hasOwnProperty('getOwnPropertyNames'))
//es6 非原型
console.log(util.hasOwnProperty('assign'))


console.log('----test end---')
util.getOwnPropertyNames();

function hasPrototypeProperty(object,name) {
    return !object.hasOwnProperty(name) && (name in object);
}