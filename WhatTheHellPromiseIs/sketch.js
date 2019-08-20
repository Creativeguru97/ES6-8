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
//     });
//     console.log("Skull model loaded!!");
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
//
// function setup(){
//   /*Unfotunely, p5.ja hasn't support promise yet, so I use fetch
//   that javascript native function to take the json contents.*/
//   // let promise = fetch("/jsonFiles/headphone.json");
//   // console.log("Headphone model loaded!!");
//   // promise.then(loadSkull);
//   // promise.catch(err);
//   //Or
//   fetch("/jsonFiles/headphone.json")
//   .then(() => {
//     loadJSON("/jsonFiles/skull.json");
//     console.log("Skull model loaded!!");
//   }).then(() => {
//     loadJSON("/jsonFiles/noid.json");
//     console.log("Noid model loaded!!");
//   }).then(() => {
//     loadJSON("/jsonFiles/record.json");
//     console.log("Record model loaded!!");
//   }).catch(() => {
//     console.log("Error occured")
//   })
//   console.log("Headphone model loaded!!");
// }

//This catch() catches any error naywhere throughout the fetch to last then.

//If each function is one line of code...

// function setup(){
//   fetch("/jsonFiles/headphone.json")
//   .then(() => console.log("Hi there again!"))
//   .then(() => console.log("For the fuck sake again!"))
//   .then(() => console.log("I kill you"))
//   .catch(() => console.log("Error occured"))
// }


//Difference between fetch() and $.getJSON()
//https://stackoverflow.com/questions/43201636/difference-between-fetch-and-getjson

/*To access the content of the fetch(), we have to convert that
to object we can use. In this case, to JSON object*/
// function setup(){
//   fetch("/jsonFiles/headphone.json")
//   .then(response => response.json())
//   .then(json => console.log(json))
//   .catch(() => console.log("Error occured"))
// }

//Or, like this :)
function setup(){
  fetch("/jsonFiles/headphone.json")
  .then(response => response.json())
  .then(json => createElement("h1", str(json.coordinate[floor(random(0, 100))].x)))
  .catch(() => console.log("Error occured"))
}
