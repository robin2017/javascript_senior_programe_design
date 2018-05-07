var person = {};
Object.defineProperty(person,"name",{
    writable:false,
    value:"robin"
});
person.name = "peter";
//没有配置enumerable的话，则属性不能遍历
console.log(person);//{}
console.log(person.name);//robin

