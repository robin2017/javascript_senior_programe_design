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