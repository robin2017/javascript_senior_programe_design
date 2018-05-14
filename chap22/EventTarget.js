exports.EventTarget = EventTarget;

function EventTarget() {
    this.handlers = {};//对象创建私有属性:构造函数
}
EventTarget.prototype = {//对象创建公有方法:重写原型
    constructor: EventTarget,
    addHandler: function (type, handler) {
        if (typeof this.handlers[type] == "undefined") {
            this.handlers[type] = [];//每一个事件类型可以处理一系列程序，比如click类型可以处理两个函数:
        }
        this.handlers[type].push(handler);
    },
    fire: function (event) {
        if (!event.target) {
            event.target = this;
        }
        if (this.handlers[event.type] instanceof Array) {
            var handlers = this.handlers[event.type];
            for (var i = 0, len = handlers.length; i < len; i++) {
                handlers[i](event);
            }
        }
    },
    removeHandler: function (type, handler) {
        if (this.handlers[type] instanceof Array) {
            var handlers = this.handlers[type];
            for (var i = 0, len = handlers.length; i < len; i++) {
                if (handlers[i] === handler) {
                    break;
                }
            }
            handlers.splice(i, 1);
        }
    }
};
