const container = document.querySelector("#container");

const myDiv = document.createElement("div");

const myDiv2 = document.createElement("div");





myDiv.innerHTML = "POOP";
myDiv.style.cssText = "display: inline-block";
myDiv2.innerHTML = "POOP";
myDiv2.style.cssText = "display: inline-block";
container.appendChild(myDiv);
container.appendChild(myDiv2);