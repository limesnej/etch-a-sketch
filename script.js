const container = document.querySelector("#container");



let numberOfGrids = 16;

let arrayDiv = new Array();
let horizArrayDiv = new Array();
container.style.cssText = "display: flex;"
for (let i = 0; i < 16; i++)
{
    arrayDiv[i] = document.createElement("div");
    arrayDiv[i].style.cssText = "flex: 1 ";
    container.appendChild(arrayDiv[i]);
    
    for (let j= 0; j<= 16; j++)
    {
        horizArrayDiv[j] = document.createElement("div");
        // horizArrayDiv[j].innerHTML = "poop";
        
        horizArrayDiv[j].style.cssText = "flex: 1; border: 1px solid black; padding: 10px;";
        horizArrayDiv[j].setAttribute("id", `mid`);
        arrayDiv[i].appendChild(horizArrayDiv[j]);
        
    }
}

const myDivs = document.querySelectorAll("#mid");

[...myDivs].forEach(mid => {
    mid.addEventListener("mouseover", () => {
        mid.style.backgroundColor = "red";
    })
})