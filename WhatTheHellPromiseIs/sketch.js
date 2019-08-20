//Typical callbacks
// function setup(){
//   noCanvas();
//   loadJSON("/jsonFiles/headphone.json", loadSkull);
//   console.log("Headphone model loaded!!");
// }
//
// function loadSkull(){
//   loadJSON("/jsonFiles/skull.json", loadNoid);
//   console.log("Skull model loaded!!");
// }
//
// function loadNoid(){
//   loadJSON("/jsonFiles/noid.json", loadRecord);
//   console.log("Noid model loaded!!");
// }
//
// function loadRecord(){
//   loadJSON("/jsonFiles/record.json");
//   console.log("Record model loaded!!");
// }

/*Equivalent to this below.
This is known as "callback hell", definetely not sustainable for many pf indent*/
// function setup(){
//   noCanvas();
//   loadJSON("/jsonFiles/headphone.json", () => {
//     loadJSON("/jsonFiles/skull.json", () => {
//       loadJSON("/jsonFiles/noid.json", () => {
//         loadJSON("/jsonFiles/record.json");
//         console.log("Record model loaded!!");
//       });
//       console.log("Noid model loaded!!");
//     }),
//     console.log("Skull model loaded!!")
//   });
//   console.log("Headphone model loaded!!");
// }


/*There is another way "Promise".
Promise is an object.*/
/*
Promise can be in some states
1.Pending
2.fulfilled --> then(some function)
3.rejected --> then(some function)
*/

function setup(){
  /*Unfotunely, p5.ja hasn't support promise yet, so I use fetch
  that javascript native function to take the json contents.*/
  let promise = fetch("/jsonFiles/headphone.json");
  promise.then();
}

function loadSkull(){
  loadJSON("/jsonFiles/skull.json", loadNoid);
  console.log("Skull model loaded!!");
}

function loadNoid(){
  loadJSON("/jsonFiles/noid.json", loadRecord);
  console.log("Noid model loaded!!");
}

function loadRecord(){
  loadJSON("/jsonFiles/record.json");
  console.log("Record model loaded!!");
}
