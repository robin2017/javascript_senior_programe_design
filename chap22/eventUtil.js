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
 //
 // function EventUtil() {}
 // EventUtil.prototype.addHandler = function (element, type, handler) {
 //     if (element.addEventListener) {
 //         element.addEventListener(type, handler, false);
 //     } else if (element.attachEvent) {
 //         element.attachEvent("on" + type, handler);
 //     } else {
 //         element["on" + type] = handler;
 //     }
 // };
 // EventUtil.prototype.removeHandler=function (element, type, handler) {
 //     if (element.removeEventListener) {
 //         element.removeEventListener(type, handler, false);
 //     } else if (element.detachEvent) {
 //         element.detachEvent("on" + type, handler)
 //     } else {
 //         element["on" + type] = null;
 //     }
 // };
 // EventUtil.prototype.getEvent =  function (event) {
 //     return event ? event : window.event;
 // };
 // EventUtil.prototype.getTarget=function (event) {
 //     return event.target || event.srcElement;
 // };
 // EventUtil.prototype.preventDefault = function () {
 //     if(event.preventDefault){
 //         event.preventDefault();
 //     } else {
 //         event.returnValue = false;
 //     }
 // };

