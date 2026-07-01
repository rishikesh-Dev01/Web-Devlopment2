

// setTimeout(() => {
//     console.log("apna collage");
// }, 2000);

// console.log("hello....");

h1 = document.querySelector("h1");

/* lendhi formate of code */ 
// setTimeout(() => {
//     h1.style.color = "red";
// }, 1000);

// setTimeout(() => {
//     h1.style.color = "orange";
// }, 2000);

// setTimeout(() => {
//     h1.style.color = "green";
// }, 3000);
/* lendhi formate of code */ 

 
/* optimize formate of code */ 

// function changeColor (color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     }, delay);
// }

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("blue", 1000)
//         });
//     });
// });

function changeColor (color, delay) {
    return  new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed")
        }, delay);
    })
}

async function demo() {
   await changeColor("red", 1000);
   await changeColor("orange", 1000);
   await changeColor("green", 1000);
   await changeColor("blue", 1000);
}

// that is promise chainng
// changeColor("red", 1000)
//     .then(() => {
//         console.log("red color was completed");
//         return changeColor("orange", 1000);
//     })
//     .then(() => {
//          console.log("orange color was completed");
//         return changeColor("green", 1000);
//     })
//     .then(() => {
//          console.log("green color was completed");
//         return changeColor("blue", 1000);
//     })
//     .then(() => {
//          console.log("blue color was completed");
//     })

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("blue", 1000)
//         });
//     });
// });
 
/* optimize formate of code */
// changeColor("orange", 2000)
// changeColor("blue", 3000)

// function savetoDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;

//     if(internetSpeed > 4) {
//        success();
//     } else {
//         failure();
//     }
// }

// savetoDb(
//     "apna colllage",
//     () => {
//         console.log("success: your data was saved");
//         savetoDb("hello world", () => {
//             console.log("success2: data2 saved");
//             savetoDb("Rishikesh", () => {
//                 console.log("success3: data3 saved");
//             }, () => {
//                 console.log("failure3: weak cannection");
//             })
//         }, () => {
//             console.log("failure2: weak cennection");
//         }
//       );
//     },
//     () => {
//         console.log("failure: weak cennection. data not saved ");
//     }
// )

// function savetoDb(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if(internetSpeed > 4) {
//             resolve("success: data was saved ");
//         } else {
//             reject("failure: weak cennection data was not saved");
//         }
//     })
// }

// let request =  savetoDb("apna collage"); 
//     request.then(() => {
//         console.log("promise was resloved");
//         console.log(request)
//     })
//     .catch(() => {
//         console.log("promise was rejected")
//         console.log(request)
//     });

// savetoDb("apna collage")
//     .then((result) => {
//         console.log("data1 saved.");
//         console.log(result);
//        return savetoDb("helloworld"); // that is called promise chain
//     })
//     .then((result) => {
//      console.log("data2 saved");
//      console.log("result was promise: ", result);
//      return savetoDb("Rishikesh");
//     }) 
//     .then((result) => {
//         console.log("data3 saved");
//         console.log("result was promise: ", result);
//     })
//     .catch((error) => {
//         console.log("promise was rejected")
//          console.log("error was promise: ", error);
//     });



/* Async Function */

// async  function greet() {
//     throw "404 page not found";
//     return "hello";
// }

// greet()
//     .then((result) => {
//         console.log("promise was resolved");
//         console.log("result was: ", result);
//     })
//     .catch((err) => {
//         console.log("Promise was rejected with err: ", err);
//     });

// let demo = async() => {
//     return 5;
// };

/* Await keyword  */

// function getNum() {
//     return new Promise((resolve , reject ) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) +1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// }

// async function demo() {
//    await  getNum();
//    await getNum();
//    await getNum();
//    await getNum();
//     getNum();
// }