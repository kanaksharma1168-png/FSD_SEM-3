/*import calculateArea,{calculatePerimeter } from "./esm.js";

console.log(calculateArea(3));
console.log(calculatePerimeter(3));*/

//or 
import calculateArea,{calculatePerimeter as cp } from "./esm.js";

console.log(calculateArea(3));
console.log(cp(3));

