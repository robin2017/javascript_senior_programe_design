var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
var everyResult = numbers.every(function (item) {
    return item > 3;
});
console.log(everyResult);//false

var someResult = numbers.some(function (item) {
    return item > 3;
});
console.log(someResult);//true

var filterResult = numbers.filter(function (item) {
    return item > 3;
});
console.log(filterResult);//[ 4, 5, 4 ]

var mapResult = numbers.map(function (item) {
    return item * 2;
});
console.log(mapResult);//[ 2, 4, 6, 8, 10, 8, 6, 4, 2 ]
