//避免多次提交表单（得要配合ajax来进行验证，不然会整个刷新页面）
var form = document.getElementById('myForm');
EventUtil.addHandler(form,"submit",function (event) {
      event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);
    var btn = target.elements["btn"];
    btn.disabled= true;
});
 alert(window.JSON)
