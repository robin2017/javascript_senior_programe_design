function outputNumbers(count){
  (function(){//模仿块级作用域
    for(var i=0;i<count;i++){
      console.log(i)
    }
  })();
  console.log(i)
}
outputNumbers(5)
