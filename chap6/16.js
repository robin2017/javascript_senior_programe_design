function RobinArray() {
}
//先继承，再定义原型方法
RobinArray.prototype = new Array();
RobinArray.prototype.robinHello = function () {
    return "hello,robin"
};
//测试
var arr = new RobinArray();
arr.push(1, 4, 3, 5);
arr.sort();
console.log(arr);
console.log(arr.robinHello());



