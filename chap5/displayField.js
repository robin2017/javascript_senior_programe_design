function displayProp(obj){
    for(var name in obj){
      console.log(name+":"+obj[name])
    }
}

function displayPropertyProp(obj){
  var props = Object.getOwnPropertyNames(obj)
    for(var i = 0;i<props.length;i++) {
        console.log(props[i]+":" +obj[props[i]])
    }
}

var obj = new Object();
function sum(num1,num2) {
    return num1+num2;
}
displayProp(obj.__proto__);
displayPropertyProp(obj.__proto__)
console.log('------')
displayPropertyProp(sum)
// displayProp2(sum.__proto__)
