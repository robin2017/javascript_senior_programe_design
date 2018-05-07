function SuperType() {
    //数据属性：独立
    this.colors = []
}
function SuberType() {
}
//继承
SuberType.prototype = new SuperType();
var instance1 = new SuberType();
instance1.colors.push("black");
console.log(instance1.colors);//['black' ]
var instance2 = new SuberType();
//数据属性期望是独立的
console.log(instance2.colors);//['black' ]

