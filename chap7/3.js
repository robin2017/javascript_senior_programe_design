function createComparsionFunction(propertyName) {
    return function (object1, object2) {
        //内部函数代码可以访问外部函数变量propertyName
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];
        if (value1 < value2) {
            return -1;
        } else if (value1 > value2) {
            return 1;
        } else {
            return 0;
        }
    }
}
var compareNames =  createComparsionFunction("name") //外部函数调用时/内部函数创建时
//外部函数调用后
var result = compareNames({name:"robin"},{name:"peter"})//内部函数调用时
//内部函数调用后
compareNames = null; //内部函数赋值null
