//
// function somefunc(anotherFunc){//This anotherFunc is the higher order function!
//   return anotherFunc2();//This is the higher order function too!!!
// }

// --- Callback higher order function ---
// function setup(){
//
// }
//
// function meow(){
//   console.log("Meow meow");
// }
//
// function sing(callback){
//   console.log("lalala");
//   if(callback instanceof Function){
//     callback();
//   }
// }



//With arrow syntax
// function setup(){
//   sing(() => {
//     console.log("Meow meow");
//   });
// }
//
// function sing(callback){
//   console.log("lalala");
//   if(callback instanceof Function){
//     callback();
//   }
// }


// --- Return higher order function ---

// function setup(){
//
// }
//
// function multiplier(factor){
//   return function(x) {
//     return x * factor;
//   }
// }
//
// let doubler = multiplier(2);
// let tripler = multiplier(3);
//
// console.log(doubler(4));//Expect 8
// console.log(tripler(4));//Expect 12


//With arrow syntax
function setup(){

}

function multiplier(factor){
  return x => x * factor;
}

//If the arguements are more than one, it requires parentheses.
//If the processes are more than one, it requires curly brackets.
//"return" is assumed if it's one line of code in the function!!!!!!!
// (x, y) => {
//   x = x * factor;
//   return x * y;
// }


let doubler = multiplier(2);
let tripler = multiplier(3);

console.log(doubler(4));//Expect 8
console.log(tripler(4));//Expect 12
