"use strict";

//  ex 1 | Temperature v1.0

// let weather = Math.floor(Math.random() * 25);
// console.log(weather);
// if (weather <= 10) {
//     console.log(`The weather is cold`);
// } else {
//     console.log(`The weather is moderate`);
// }

//  ex 2 | Highest value in an array of

let arr = [1, 7, -3, 9];
let highest = 0;

for (let i = 0; i < arr.length; i++) {
    //console.log(arr[i]);
    if (arr[i] > highest) {
        highest = arr[i];
    }
}
console.log(highest);

//  ex 3 | Temperature v2.0

const cold = document.querySelector(".cold");
const imageCold = document.createElement("img");
const coldImg = cold.appendChild(imageCold);
imageCold.src =
    "data:image/jpeg;base64,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";

const moderate = document.querySelector(".moderate");
const imageModerate = document.createElement("img");
const moderateImg = moderate.appendChild(imageModerate);
imageModerate.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkx3AFJGLStMVbCldab8jDMGpCmXh5xKiPzw&usqp=CAU";

const hot = document.querySelector(".hot");
const imageHot = document.createElement("img");
const hotImg = hot.appendChild(imageHot);
imageHot.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnHaQiF3oglXjDeeCXyKcFYVSzdLh_Lj6jMQ&usqp=CAU";

let weather = Math.floor(Math.random() * 40);
console.log(weather);
if (weather <= 10) {
    cold.innerHTML = `The Weather is cold.`;
    // cold.style.backgroundColor = "blue";
    // cold.style.textAlign = "center";
    cold.style.cssText = "background: blue; textAlign: center";
    cold.appendChild(imageCold).innerHTML;
    moderate.style.opacity = "0";
    hot.style.opacity = "0";
} else if (weather <= 25) {
    moderate.innerHTML = `The weather is moderate.`;
    // moderate.style.backgroundColor = "green";
    // moderate.style.textAlign = "center";
    moderate.style.cssText = "background: green; textAlign: center";
    moderate.appendChild(imageModerate).innerHTML;
    cold.style.opacity = "0";
    hot.style.opacity = "0";
} else {
    hot.innerHTML = `The weather is hot.`;
    // hot.style.backgroundColor = "orange";
    // hot.style.textAlign = "center";
    hot.style.cssText = "background: orange; textAlign: center";
    hot.appendChild(imageHot).innerHTML;
    moderate.style.opacity = "0";
    cold.style.opacity = "0";
}