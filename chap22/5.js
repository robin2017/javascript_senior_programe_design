var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function printValue(item) {
    var div = document.getElementById("myDiv");
    div.innerHTML += item + "<br>"
}
//所有的一起做(所有耗时长)
function doAll() {
    data.forEach(function (item) {
        printValue(item);
    })
}
doAll();

//数组分块，一件件做(每个耗时短)
function chunk(array, fn, time, context) {
    setTimeout(function () {
        var item = array.shift();
        fn.call(context, item);
        if (array.length > 0) {
            setTimeout(arguments.callee, time);
        }
    }, time)
}
function doOneByOne() {
    chunk(data, printValue, 1)
}
doOneByOne();

