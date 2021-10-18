console.log("Hello, World")

let number = 1;
let columns = 3;
let rows = 3;

let numberOfCards = 1;
let numberOfCardsArr = [...Array(Number(numberOfCards))]

let cardTypeValue = 20;
let numberFillArr = [...Array(cardTypeValue)];
let numArr = numberFillArr.fill(numberFillArr.map(item => item = cardTypeValue--))[0];

function typeOfCard(){
    cardTypeValue = document.getElementById("card-type").value;
    console.log(typeof(cardTypeValue))
    numberFillArr = [...Array(Number(cardTypeValue))];
    numArr = numberFillArr.fill(numberFillArr.map(item => item = cardTypeValue--))[0];
}

function changeNumberOfCards(){
    numberOfCards = document.getElementById("card-number").value;
    numberOfCardsArr = [...Array(Number(numberOfCards))];
    numArr = numberFillArr.fill(numberFillArr.map(item => item = cardTypeValue--))[0];
    generateCards(); 
}

function cardSize(){
    columns = document.getElementById("card-size").value;
    rows = document.getElementById("card-size").value;
    numArr = numArr;
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

function arraySplice(array, columns){ 
    let newArr = [];
    let count = 1;
    while(count <= rows){
        newArr.push(array.splice(0, columns));
        count++;
    }
    return newArr;
}

function generateCards(){
    document.getElementById("cards-container").innerHTML = "";
    numberOfCardsArr.forEach(card => {
        //numArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
        typeOfCard();
        let tableArr = arraySplice(shuffleArray(numArr), columns);
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
