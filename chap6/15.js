function SuperType() {
    this.supProperty = true;
}
SuperType.prototype.getSuperValue = function () {
    return this.supProperty;
};
function SuberType() {
    this.subProperty = false;
}
//如果定义原型方法的放在在继承之前，那么重写后失效
SuberType.prototype.getSuberValue = function () {
    return this.subProperty;
};
//继承：子类型的原型对象指向父类型的实例
SuberType.prototype = new SuperType();

var instance = new SuberType();
console.log(instance.getSuperValue());//true


