var f = (function factor(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * factor(num - 1);
    }
});
console.log(f(5));//120