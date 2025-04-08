const root = document.getElementById("myDiv");

let count = 0;
root.innerHTML = `hello html world ${count}`;

const myCustomElement = document.createElement("div");
console.log(myCustomElement);

function handleIn(){
    count++;
    root.innerHTML = `hello html world ${count}`;
}