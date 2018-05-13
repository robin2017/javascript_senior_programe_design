var person = {name: "robin"};
console.log(Object.isExtensible(person));//true
//不可扩展执行
Object.preventExtensions(person);
//不可扩展检测
console.log(Object.isExtensible(person));//false
