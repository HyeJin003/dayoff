//1. 함수를 통해 호출 하기 
//const moduleData = require("./dayoff/math");
//2. 객체의 구조분해 할당으로 add 와 sub 함수를 받아 올때 
// const { add, sub }  = require("./dayoff/math");
// console.log(add(1,2));
// console.log(sub(1,2));

// //1. 함수 호출해서 하는법 
// //const moduleData = require('./dayoff/math');
// const { add, sub } = require("/dayoff/math");
// console.log(moduleData);
// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));
// console.log("안녕 , Node.js");
import multiply from "./dayoff/math.js"
import { add, sub } from "./dayoff/math.js"
console.log(add(1, 2));
console.log(sub(1, 2));
console.log(multiply(1, 2));
