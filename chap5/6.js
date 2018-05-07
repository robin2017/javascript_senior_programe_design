//对象的排序
function objectComparison(propertyName) {
    return function (obj1, obj2) {
        var val1 = obj1[propertyName];
        var val2 = obj2[propertyName];
        if (val1 > val2) {
            return 1;
        } else if (val1 < val2) {
            return -1;
        } else {
            return 0;
        }
    }
}
//数组的排序
var arr = [{name: "robin", age: 18}, {name: "peter", age: 17}];
//[ { name: 'peter', age: 17 }, { name: 'robin', age: 18 } ]
console.log(arr.sort(objectComparison("age")));
