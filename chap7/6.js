var name = "the window";
var object = {
    name: 'the object',
    getNameFunc: function () {
        return function () {//匿名函数内this为window或者global
            return this.name;
        }
    }
};
//node:undefined
//window非严格模式:the window
//window严格模式:TypeError: Cannot read property 'name' of undefined
console.log(object.getNameFunc()());