/**
 * Created by robin on 2017/10/14.
 */

// var supportsTraversals = document.implementation.hasFeature("Traversal", "2.0")
// var supportsNodeIterator = (typeof document.createNodeIterator == "function")
// var supportsTreeWarker = (typeof document.createTreeWalker == "function")
//
// console.log(supportsTraversals)
// console.log(supportsNodeIterator)
// console.log(supportsTreeWarker)

// var btn=document.getElementById("myBtn");
// btn.onclick = function () {
//     alert("Clicked")
// };
//
// console.log(btn.onclick)

// var btn = document.getElementById("myBtn")
// btn.addEventListener("click",function () {
//     alert("hello world")
// },false)

var EventUtil = {
    addHandler: function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },
    removeHandler: function (element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler)
        } else {
            element["on" + type] = null;
        }
    },
    getEvent: function (event) {
        return event ? event : window.event;
    },
    getTarget: function (event) {
        return event.target || event.srcElement;
    },
    preventDefault:function () {
        if(event.preventDefault){
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    }
};

//注册和操作分离：注册在<ul>上，操作在<li>
var list = document.getElementById("myLinks");
EventUtil.addHandler(list, "click", function (event) {
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);
    switch (target.id) {
        case "doSomething":
            document.title = "I changed the documents title";
            break;
        case "goSomewhere":
            location.href = "http://www.baidu.com";
            break;
        case "sayHi":
            alert("Hi");
            break;
    }
});

var robin=document.getElementById("robin");
robin.addEventListener('click',robinfun,false);
function  robinfun() {
    alert('dd')
}

// var btn = document.getElementById("myBtn");
// //dom0 参数可省
// // btn.onclick = function (event) {
// //     alert(event.type)
// // }
// //dom2 参数可省
// btn.addEventListener("click",function () {
//     alert(event.currentTarget)
// },false)

//一个事件绑定多个处理函数 dom2  (容易理解，但是耗内存)
// var btn = document.getElementById("myBtn");
// btn.addEventListener("click",function () {
//     alert("hello ")
// },false)
// btn.addEventListener("click",function () {
//     alert("world ")
// },false)

//一个处理函数处理多个事件  dom0 （不易理解，但是内存小） 使用type属性
// var btn = document.getElementById("myBtn");
// var handler = function (event) {
//     switch (event.type) {
//         case "click":
//             alert("clicked");
//             break;
//         case "mouseover":
//             event.target.style.backgroundColor = "red";
//             break;
//         case "mouseout":
//             event.target.style.backgroundColor="";
//             break;
//     }
// }
// btn.onclick = handler;
// btn.onmouseover = handler;
// btn.onmouseout = handler;

// EventUtil.addHandler(window,"load",function () {
//     alert('loaded')
// })

// var btn = document.getElementById('myBtn');
// // btn.onclick = function (event) {
// //     alert(event.wheelDelta)
// // }
// var txt = document.getElementById("txt");
// txt.addEventListener("textInput",function () {
//     alert(String.fromCharCode(event.inputMethod))
// },false)

/**模拟鼠标事件*/
// var btn = document.getElementById("myBtn");
// //1、创建事件对象
// var event = document.createEvent("MouseEvents");
// //2、初始化事件对象
// event.initMouseEvent("click", true, true,
//     document.defaultView, 0, 0, 0, 0, 0,
//     false, false, false, false, 0, null);
// window.setTimeout(function () {
//     //3、触发事件
//     btn.dispatchEvent(event)
// }, 3000)


/**模拟键盘事件*/
var txt = document.getElementById("txt");
var event = document.createEvent("Events");
event.initEvent("keydown",true,true);
event.view = document.defaultView;
event.altKey = false;
event.ctrlKey = false;
event.shiftKey = false;
event.metaKey = false;
event.keyCode = 65;
event.charCode = 65;

txt.dispatchEvent(event)






// // alert(document.implementation.hasFeature("KeyboardEvents","3.0"))
// var event = document.createEvent("KeyboardEvent");
// event.initKeyboardEvent("keydown",true,true,document.defaultView,"a",0,"Shift",0);
// window.setTimeout(function () {
//     txt.dispatchEvent(event);
// },3000)