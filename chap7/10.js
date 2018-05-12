function Student(val) {
    this.name = val;
}
function Teacher(val) {
    var name = val;
}
var s = new Student("robin");
console.log(s.name);//robin
var t = new Teacher("robin");
console.log(t.name);//undefined
