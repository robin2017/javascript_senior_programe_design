function outer() {
    inner();
}
function inner() {
    console.log(inner);
    console.log(inner.arguments.callee);
    console.log(arguments.callee.caller);
}
outer();
