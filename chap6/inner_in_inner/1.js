function func() {
    //只有在函数内部，arguments才不为null
    console.log(func.arguments.callee == func)
}
func();//true




