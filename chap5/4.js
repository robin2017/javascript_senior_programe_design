var arr = new Array();
arr.push(1, 2, 3);
//数组里面可以放属性
arr["name"] = "robin";
console.log(arr);//[ 1, 2, 3, name: 'robin' ]

function func() {
    console.log("i am function")
}
console.log(func instanceof Object);//true




