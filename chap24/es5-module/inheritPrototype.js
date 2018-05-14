if(typeof(Robin) =='undefined') {
    Robin = {};
}
if(typeof(Robin.ProJS)=="undefined") {
    Robin.ProJS = {}
}
if(typeof(Robin.ProJS.Object)=="undefined") {
    Robin.ProJS.Object = {}
}
Robin.ProJS.Object.inheritPrototype = function(subType, superType) {
    var prototype = this.object(superType.prototype);
    prototype.constructor = subType;
    subType.prototype = prototype;
};
Robin.ProJS.Object.object = function(o) {
    function F() {}
    F.prototype = o;
    return new F();
};

