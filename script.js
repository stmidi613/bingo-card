console.log("Hello, World")

let columns = 3;
let rows = 3;

let numberOfCards = 1;
let numberOfCardsArr = [...Array(Number(numberOfCards))]

let typeOfCardArr = [];
let cardTypeValue = 20;
let numberFillArr = [...Array(cardTypeValue)];

let theChristmasArr = [`<img src="pictures/deer.svg" class="picture" alt="deer">`,
                    `<img src="pictures/mistletoe.png" class="picture" alt="mistletoe">`,
                    `<img src="pictures/candle.svg" class="picture" alt="candle">`,
                    `<img src="pictures/santa.svg" class="picture" alt="santa">`,
                    `<img src="pictures/christmastree.png" class="picture" alt="christmastree">`,
                    `<img src="pictures/wreath.png" class="picture" alt="wreath">`,
                    `<img src="pictures/bells.svg" class="picture" alt="bells">`,
                    `<img src="pictures/elf.png" class="picture" alt="elf">`,
                    `<img src="pictures/candy-cane.png" class="picture" alt="candycane">`,
                    `<img src="pictures/stocking.svg" class="picture" alt="stocking">`,
                    `<img src="pictures/present.svg" class="picture" alt="present">`,
                    `<img src="pictures/lights.png" class="picture" alt="lights">`,
                    `<img src="pictures/gingerbread.png" class="picture" alt="gingerbread">`,
                    `<img src="pictures/eggnog.jpg" class="picture" alt="eggnog">`,
                    `<img src="pictures/sleigh.svg" class="picture" alt="sleigh">`,
                    `<img src="pictures/snowflake.svg" class="picture" alt="snowflake">`,
                    `<img src="pictures/snowman.svg" class="picture" alt="snowman">`,
                    `<img src="pictures/manger.jpg" class="picture" alt="mager">`,
                    'balls',
                    'milk-and-cookies',
                    'carolers',
                    'church',
                    'Dec 25th',
                    'toys',
                    'dinner'];

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
    if(cardTypeValue === "100" || cardTypeValue || "50"){
        document.getElementById("seven").style.visibility = "hidden";
    }else{
        document.getElementById("seven").style.visibility = "visible";
    }
    if(cardTypeValue === "halloweenArr"){
        typeOfCardArr = halloweenArr.map(pic => pic);
    }else if(cardTypeValue === "theChristmasArr"){
        typeOfCardArr = theChristmasArr.map(pic => pic);
    }else{
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

//this function splices the array into smaller arrays so it can fit into a table
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
