// let smallImges = document.getElementsByClassName("oldImg");

// for(let i=0; i<smallImges.length; i++) {
//     smallImges[i].src = "spiderman_img.png";
//     console.log(`values of image no. ${i} is changed.`);
// }

// console.dir(document.querySelector("h1"));

// console.dir(document.querySelector("#description"));

// console.dir(document.querySelector(".oldImg"));


 let links = document.querySelectorAll(".box a");

// for(let i=0; i<links.length; i++) {
//     links[i].style.color = "green";
// }


for(link of links) {
    link.style.color = "purple";
}