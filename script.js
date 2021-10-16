console.log("Hello, World")

const ARRAY = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
let column = 3;
let rows = 3;
let shuffledArr = [];
let numberOfCards = 2;
let numberOfCardsArr = [...Array(numberOfCards)]

function shuffleArray(ARRAY){
    function randInd(){
         return Math.floor(Math.random() * ARRAY.length);
    }
    let count = ARRAY.length;
    while(0 !== count){
        let randomInd = randInd();
        shuffledArr.push(ARRAY.splice(randomInd, 1)[0]);
        count--;
    }
    return shuffledArr;
}

function arraySplice(array, column){ 
    let newArr = [];
    let count = 1;
    while(count <= rows){
    newArr.push(array.splice(0, column));
    count++;
    }
    return newArr;
}

let tableArr = arraySplice(shuffleArray(ARRAY), column);
console.log(tableArr)

window.onload = function(){
    numberOfCardsArr.forEach(card => {
    document.getElementById("cards-container").insertAdjacentHTML("beforeend",
    
    `<div class="card-wrapper">
        <h1>Bingo Card</h1>
        <table class="card">
        ${tableArr.map(array => `<tr>
            ${array.map(item => `<td class="cells">${item}</td>`).join("")}
            </tr>`).join("")}
        </table>
        </div>`
        )
    })
}
