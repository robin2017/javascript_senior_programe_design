/**
 * Created by robin on 2017/10/13.
 */

//递归1：函数声明
function factorial1(num) {
    if(num <= 1) {
        return 1;
    } else {
        return num * factorial1(num - 1);
    }
}

//递归2：函数声明+arguments.callee
function factorial2(num) {
    if(num <= 1) {
        return 1;
    } else {
        return num * arguments.callee(num - 1);
    }
}

//递归3:命名函数表达式
var factorial3 =( function f(num) {
    if(num <= 1) {
        return 1;
    } else {
        return num * f(num - 1);
    }
})

console.log(factorial1(5));

console.log(factorial2(5));

console.log(factorial3(5));
