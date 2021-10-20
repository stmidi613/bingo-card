console.log("Hello, World")

let number = 1;
let columns = 3;
let rows = 3;

let numberOfCards = 1;
let numberOfCardsArr = [...Array(Number(numberOfCards))]

let typeOfCardArr = [];
let cardTypeValue = 20;
let numberFillArr = [...Array(cardTypeValue)];
let ChristmasArr = [];
let halloweenArr = [];

function typeOfCard(){
    cardTypeValue = document.getElementById("card-type").value;
    numberFillArr = [...Array(Number(cardTypeValue))];
    typeOfCardArr = numberFillArr.fill(numberFillArr.map(item => item = cardTypeValue--))[0];
}

function changeNumberOfCards(){
    numberOfCards = document.getElementById("card-number").value;
    numberOfCardsArr = [...Array(Number(numberOfCards))]; 
    generateCards();
}

function cardSize(){
    columns = document.getElementById("card-size").value;
    rows = document.getElementById("card-size").value;
    generateCards();
}


function shuffleArray(arr){
    let shuffledArr = [];
    function randInd(){
         return Math.floor(Math.random() * arr.length);
    }
    let count = arr.length;
    console.log(arr.length)
    while(0 !== count){
        let randomInd = randInd();
        shuffledArr.push(arr.splice(randomInd, 1)[0]);
        count--;
    }
    console.log(shuffledArr)
    return shuffledArr;
}

function arraySplice(array, columns){ 
    let newArr = [];
    let count = 1;
    while(count <= rows){
        newArr.push(array.splice(0, columns));
        count++;
    }
    console.log(newArr)
    return newArr;
}

function generateCards(){
    document.getElementById("cards-container").innerHTML = "";
    numberOfCardsArr.forEach(card => {
        typeOfCard();
        console.log(typeOfCardArr)
        let tableArr = arraySplice(shuffleArray(typeOfCardArr), columns);
        document.getElementById("cards-container").insertAdjacentHTML("beforeend",
    
            `<div class="card-wrapper">
                <h2>Bingo Card</h2>
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
