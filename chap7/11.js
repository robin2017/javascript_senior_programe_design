function MyObject(){
  var privateVariable = 10;
  function privateFunction(){
    return false;
  }
  //特权方法是闭包，且必须放在this上面
  this.specialFunction = function(){
    console.log(privateVariable);
    console.log(privateFunction);
  }
}
var object = new MyObject();
object.specialFunction();
