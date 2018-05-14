var Event = require('./3');
//新建:主体对象
function handleMessage(event) {
  console.log('MESSAGE RECEIVE:',event.message);
}
//新建:观察者对象
var target = new Event.EventTarget();
//两者建立关联(事件类型，如click)
target.addHandler("message",handleMessage)
//主体对象事件触发
target.fire({type:"message",message:"hello"});




