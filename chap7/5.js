function createFunctions() { //外部createFunctions函数
    var result = new Array();
    for (var i = 0; i < 10; i++) {
        result[i] = function (num) { //中层执行函数
            return function () { //内部匿名函数
                return num;
            }
        }(i)
    }
    return result;
}
var funcs = createFunctions();
console.log(funcs[0]());
