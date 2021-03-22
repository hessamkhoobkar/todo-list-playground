import "./index.css"

// const headline = "Welcom to the wabpage!";
// document.querySelector("h1").innerText = headline;

const root = document.getElementById("root");

// 1
const testHead = `<h1>Hello world</h1>`;
let container = document.createElement("div");
container.classList.add("heading");
container.innerHTML = testHead;

root.appendChild(container)

// 2
const testPragraph = `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fugiat iure sit atque velit maiores vel commodi laboriosam optio distinctio? Similique libero dicta, laudantium nulla consequatur molestias fugiat facilis eos.</p>`;
let testPragraphcontainer = document.createElement("div");
testPragraphcontainer.classList.add("pragraph");
testPragraphcontainer.innerHTML = testPragraph;

root.appendChild(testPragraphcontainer)

const elvenShieldRecip = {
    leatherStrips: 2,
    ironInget: 1,
    refinedMoonStone: 4
}

const superiorElvenShieldRecip = {
    ...elvenShieldRecip,
    paltnium: 2,
}

console.log(elvenShieldRecip);
console.log(superiorElvenShieldRecip);