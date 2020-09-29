import func from "./test";

const obj = func();
const obj2 = {...func()};


console.log(obj);
console.log(obj2);