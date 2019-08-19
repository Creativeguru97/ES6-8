// //ES5
// function blah(arguments){
//
// }
//
// //ES6
// (argument) => {
//
// }
// //parentheses and curly bracket is optinal !!!!!
//
// //Eventually, like this
// argument => argument * 2;
// //Equivalent to
// function (argument){
//   return argument * 2;
// }



// function setup(){
//   createCanvas(600, 400);
//   let button = createButton("press");
//   button.mousePressed(function (){//Anonymous functiopn
//     background(random(255));
//   });
//   background(0);
// }

//Equivalent to
// function setup(){
//   createCanvas(600, 400);
//   let button = createButton("press");
//   button.mousePressed(() => background(random(255)));
//   background(0);
// }


//A case arrow syntax is useful
let counter1;
let counter2;
let counter3;

function setup(){
  noCanvas();
  counter1 = new Counter(100, 500);
  counter2 = new Counter(300, 100);
  counter3 = new Counter(30, 200);
  counter1.start();
  counter2.start();
  counter3.start();
}


// class Counter{
//   constructor(start, wait){
//     this.count = start;
//     this.p = createP("");
//     setInterval(() => {
//       this.count++;
//       this.p.html(this.count);
//     }, wait);
//   }
//
// }

class Counter{
  constructor(start, wait){
    this.count = start;
    this.wait = wait;
    this.p = createP("");
  }

  start(){
    setInterval(() => this.countIt(), this.wait);
  }

  countIt(){
    this.count++;
    this.p.html(this.count);
  }

}


/*If we use function(){} at here. "this" gonna refer gloval window object.
So this.countIt() is no make sense to hte program.
Arrow syntax on the other hand, refer this class object.*/
