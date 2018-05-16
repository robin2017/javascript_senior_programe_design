var arr = [1, 2, 3];
var obj = {name: 'robin', age: 24};
//es5数组遍历
arr.forEach(function (item) {
    console.log(item)
});
//es5对象遍历
for (var attr in obj) {
    console.log(attr, ":", obj[attr])
}
//es6数组迭代器
for (let item of arr) {
    console.log(item)
}
//es6对象迭代器
for (let item of obj) {//error
    console.log(item)
}
