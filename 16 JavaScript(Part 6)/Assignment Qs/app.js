// Practice question 1.

// let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let num = 5;

function getElement(arr, num) {
    for(let i = 0; i<arr.length; i++) {
        if(arr[i] > num) {
            console.log(arr[i]);
        }
    }
}

// getElement(arr, num);



// Practice quesiton 2.
// write a js function to extract Unique characters from a string  str = "abcdabcdefgggh" 

let str = "abcdabcdefgggh";

function getUnique(str) {
    let ans = " ";

    for(let i=0; i < str.length; i++){
        let currChar = str[i];

        if(ans.indexOf(currChar) == -1){
            ans += currChar;
        }
    }

    return ans;
}

console.log(getUnique(str));


// Practice question 3.

// W A JS function that accepts a list of country names as input and return longest country name as output

let country = ["Australia", "Germany", "United states of America"];

function longestCountryName(country) {
    let ansIdx = 0;

    for(let i=0; i<country.length; i++){
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;

        if(currLen > ansLen){
            ansIdx = i;
        }
    }

    return country[ansIdx];
}

 console.log(longestCountryName(country));


 // Practice question
 // Warite a javaScript function to count the number of vowels in a string argument.

 let str2 =  "apnacollage";

function getVowelCount(str2) {
    let count = 0;

    for(let i=0; i<str2.length; i++) {
        if(
            str2.charAt(i) === "a" ||
            str2.charAt(i) === "e" ||
            str2.charAt(i) === "i" ||
            str2.charAt(i) === "o" ||
            str2.charAt(i) === "u"
        ) {

            count++;
        }
    }

    return count;
}

console.log(getVowelCount(str2));

// Practice Question 5.
// write js function print random number start and end 

let start = 100;
let end = 200;

function generateRandom(start,end) {
    let diff = end - start;
    return Math.floor(Math.random() * diff) + start;
}

console.log(generateRandom(start,end));