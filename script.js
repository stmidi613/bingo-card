console.log("Hello, World")

let columns = 3;
let rows = 3;

let numberOfCards = 1;
let numberOfCardsArr = [...Array(Number(numberOfCards))]

let typeOfCardArr = [];
let cardTypeValue = 20;
let numberFillArr = [...Array(cardTypeValue)];

let theChristmasArr = [];

let halloweenArr = [`<img src="pictures/blackcat.svg" class="picture" alt="blackcat">`,
                    `<img src="pictures/ghost.svg" class="picture" alt="ghost">`,
                    `<img src="pictures/tombstone.svg" class="picture" alt="tombstone">`,
                    `<img src="pictures/bat.svg" class="picture" alt="bat">`,
                    `<img src="pictures/pumpkin.svg" class="picture" alt="pumpkin">`,
                    `<img src="pictures/witch.svg" class="picture" alt="witch">`,
                    `<img src="pictures/mummy.svg" class="picture" alt="mummy">`,
                    `<img src="pictures/cobweb.svg" class="picture" alt="cobweb">`,
                    `<img src="pictures/frankenstein.svg" class="picture" alt="frankenstein">`,
                    `<img src="pictures/coffin.png" class="picture" alt="coffin">`,
                    `<img src="pictures/skeleton.png" class="picture" alt="skeleton">`,
                    `<img src="pictures/grimm-reaper.png" class="picture" alt="grim reaper">`,
                    `<img src="pictures/haunted-house.png" class="picture" alt="haunted house">`,
                    `<img src="pictures/zombie.png" class="picture" alt="zombie">`,
                    `<img src="pictures/vampire.png" class="picture" alt="vampire">`,
                    `<img src="pictures/candy.png" class="picture" alt="candy">`,
                    `<img src="pictures/werewolf.svg" class="picture" alt="werewolf">`,
                    `<img src="pictures/graveyard.svg" class="picture" alt="graveyard">`,
                    `<img src="pictures/skull.png" class="picture" alt="skull">`,
                    `<img src="pictures/spider.png" class="picture" alt="spider">`,
                    `<img src="pictures/scarecrow.png" class="picture" alt="scarecrow">`,
                    `<img src="pictures/owl.png" class="picture" alt="owl">`,
                    `<img src="pictures/masks.png" class="picture" alt="masks">`,
                    `<img src="pictures/crow.svg" class="picture" alt="crow">`,
                    `<img src="pictures/demon.png" class="picture" alt="demon">`
                ];

function typeOfCard(){
    cardTypeValue = document.getElementById("card-type").value;
    if(cardTypeValue === "halloweenArr"){
        //cardTypeValue = document.getElementById("card-type").value;
        typeOfCardArr = halloweenArr;
        console.log(typeOfCardArr)
    }else{
        //cardTypeValue = document.getElementById("card-type").value;
        numberFillArr = [...Array(Number(cardTypeValue))];
        typeOfCardArr = numberFillArr.fill(numberFillArr.map(item => item = cardTypeValue--))[0];
    }
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
