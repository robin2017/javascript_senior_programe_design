function displayPropertyProp(obj) {
    var props = Object.getOwnPropertyNames(obj);
    for (var i = 0; i < props.length; i++) {
        console.log(props[i] + ":" + obj[props[i]])
    }
}

function sum(num1, num2) {
    return num1 + num2;
}

displayPropertyProp(sum);

