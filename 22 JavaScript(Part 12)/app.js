// h1 = document.querySelector("h1");

// function changeColor (color, delay) {
//     return  new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 5) +1 ;
//             if(num > 3) {
//                 reject("promise was rejected");
//             }
//             h1.style.color = color;
//             console.log(`color changed to ${color}!`);
//             resolve("color changed")
//         }, delay);
//     })
// }

// async function demo() {
//     try{ 
//    await changeColor("red", 1000);
//    await changeColor("orange", 1000);
//    await changeColor("green", 1000);
//    await changeColor("blue", 1000);
// } catch(error){
//     console.log("error caught");
//     console.log(error);
// }
//    let a = 6;
//    console.log(a);
//    console.log("new number = ", a + 3);
// }

let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res) => {
//     return res.json()
// })
// .then((data) => {
//     console.log("data1 = ", data.fact); 
//     return fetch(url);
// })
// .then((res) => {
//     return res.json()
// })
// .then((data2) => {
//     console.log("data2 =", data2.fact);
// })
// .catch((err) => {
//     console.log("error", err);
// });

// console.log("i'm happy ")


async function getFacts() {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
}