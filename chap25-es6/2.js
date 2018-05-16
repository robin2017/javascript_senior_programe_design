var numbers = [1,2,3,4,5,4,3,2,1];
//返回boolean
 var everyResult = numbers.every(function (item,index,array) {
     return (item>2);
 });
console.log(everyResult);
//返回boolean
var someResult = numbers.some(function (item,index,array) {
    return (item>2);
});
console.log(someResult);
//返回Array
var filterResult = numbers.filter(function (item,index,array) {
    return (item>2);
});
console.log(filterResult);
//返回Array
var mapResult = numbers.map(function (item,index,array) {
    return item*2;
});
console.log(mapResult);
//es6的数组领悟
var mapResult2 = [i for each (i in numbers)];
console.log(mapResult2)