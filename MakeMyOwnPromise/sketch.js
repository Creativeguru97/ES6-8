//What the hell is  promise
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

//Difference between fulfilled and resolved
//https://stackoverflow.com/questions/35398365/js-promises-fulfill-vs-resolve

//States and fates
//https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md

//ECMA Script description (most understandable)
//https://www.ecma-international.org/ecma-262/9.0/index.html#sec-promise-objects




// function setup(){
//   noCanvas();
//   delayES8(1000)
//   .then(() => createElement("h1", "Helloooooooo!!!!!"))
//   .catch((err) => console.error(err));
//
//   delay("Blah")
//   .then(() => createElement("h1", "Helloooooooo!!!!!"))
//   .catch((err) => console.error(err));
// }
//
// async function delayES8(time){
//   //This function returns a promise!!!
//   /*The await expression causes async function execution to pause
//   until a Promise is settled, that is fulfilled or rejected,
//   and to resume execution of the async function after fulfillment. */
//
//   //Async function: Basically a function returns a promise.
//   await delay(time);
//   //Stuck 1000 milliseconds...
//   return;//Finally returns!!!
// }
//
// function delay(time){
//   return new Promise((resolve, reject) => {
//
//     if(isNaN(time)){//Is the arguement an illegal number?
//       reject(new Error("Delay requires a valid number."));
//     }else{
//       setTimeout(resolve, time);
//     }
//   });
// }



function setup(){
  noCanvas();

  let promises = [loadModels(2,20), loadModels(4,50), loadModels(3,18200)];
  Promise.all(promises)
  .then((results) => {
    for(let i = 0; i < results.length; i++){
      createDiv();
      createElement("hi", results[i]);
    }
  })
  .catch(err => console.log(err));

  loadModels(1,100)
  .then(loadModels(2,50))
  .then(loadModels(3,30))
  .catch(err => console.log(err));
}

async function loadModels(num, index){
  //Syntax Suger!!!!!!!

  /*If I declare like
  await createElement("h1", "Headphone model loaded!!");
  at here, the order not gonna work somehow...*/

  if(num == 1){
    let loadmodels = await fetch("/jsonFiles/headphone.json");
    let json = await loadmodels.json();
    try{
      return "headphone["+str(index)+"]: "+str(json.coordinate[index].x);
    }catch{
      return "That index doesn't exist in this file.";
    }
  }else if(num == 2){
    let loadmodels = await fetch("/jsonFiles/skull.json");
    let json = await loadmodels.json();
    try{
      return "skull["+str(index)+"]: "+str(json.coordinate[index].x);
    }catch{
      return "headphone["+str(index)+"]: That index doesn't exist in this file.";
    }
  }else if (num == 3) {
    let loadmodels = await fetch("/jsonFiles/noid.json");
    let json = await loadmodels.json();
    try{
      return "noid["+str(index)+"]: "+str(json.coordinate[index].x);
    }catch{
      return "headphone["+str(index)+"]: That index doesn't exist in this file.";
    }
  }else if (num == 4) {
    let loadmodels = await fetch("/jsonFiles/record.json");
    let json = await loadmodels.json();
    try{
      return "record["+str(index)+"]: "+str(json.coordinate[index].x);
    }catch{
      return "headphone["+str(index)+"]: That index doesn't exist in this file.";
    }
  }



}
