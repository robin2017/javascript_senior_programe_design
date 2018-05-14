function inheritPrototype(subType, superType) {
    var prototype = object(superType.prototype);
    prototype.constructor = subType;
    subType.prototype = prototype;
}
function object(o) {
    function F() {}

    F.prototype = o;
    return new F();
}
exports.inheritPrototype = inheritPrototype;
