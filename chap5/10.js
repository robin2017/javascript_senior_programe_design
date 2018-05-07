//node中global 等价于 web中window
global.color = "red";
var o = {color: 'blue'};
function sayColor() {
    console.log(this.color);
}
sayColor();
sayColor.call(global);
sayColor.call(o);
console.log('--------------------');
var objSayColor = sayColor.bind(o);
objSayColor();

