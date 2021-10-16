console.log("Hello, World")

let column = 3;
let rows = 3;
let numberOfCards = 1;
let numberOfCardsArr = [...Array(Number(numberOfCards))]

function changeNumberOfCards(){
    numberOfCards = document.getElementById("card-number").value;
    numberOfCardsArr = [...Array(Number(numberOfCards))];
    generateCards(); 
}
//Need to adjust the css for this part but function works
function cardSize(){
    column = document.getElementById("card-size").value;
    rows = document.getElementById("card-size").value;
    console.log(column);
    console.log(rows);
    generateCards();
}

function shuffleArray(arr){
    let shuffledArr = [];
    function randInd(){
         return Math.floor(Math.random() * arr.length);
    }
    let count = arr.length;
    while(0 !== count){
        let randomInd = randInd();
        shuffledArr.push(arr.splice(randomInd, 1)[0]);
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

function generateCards(){
    document.getElementById("cards-container").innerHTML = "";
    numberOfCardsArr.forEach(card => {
        const ARRAY = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
        let tableArr = arraySplice(shuffleArray(ARRAY), column);
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

window.onload = function(){
    generateCards();
}
