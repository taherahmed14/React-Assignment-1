import {add, mult, diff} from "./calc";
import ("./index.css");
import ImgOne from "./images/ImgOne.jpg";
import ImgTwo from "./images/ImgTwo.jpg";
import ImgThree from "./images/ImgThree.jpg";
import ImgFour from "./images/ImgFour.jpg";

console.log("Addition " + add(3, 6));
console.log("Multiplication " + mult(3, 6));
console.log("Diff " + diff(2, 6));

let h1 = document.createElement("h1");
h1.innerHTML = "React";
h1.classList.add("react");

let inputBox = document.createElement("input");

let root = document.getElementById("root");
root.append(h1, inputBox);

let imgF = document.createElement("img");
imgF.src = ImgOne;

let imgCont = document.getElementById("picturesCont");
imgCont.append(imgF);

let imgS = document.createElement("img");
imgS.src = ImgTwo;
let imgT = document.createElement("img");
imgT.src = ImgThree;
let imgFo = document.createElement("img");
imgFo.src = ImgFour;

let imgMult = document.getElementById("multPict");
imgMult.append(imgS, imgT, imgFo);

