global.name = "global-name";
var myApp = {
    name: 'robin',
    sayName: function () {
        console.log(this.name);//robin
        console.log(name);//global-name
    }
};
myApp.sayName();
