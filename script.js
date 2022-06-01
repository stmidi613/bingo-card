let columns = 3;
let rows = 3;

let numberOfCards = 1;
let numberOfCardsArr = [...Array(Number(numberOfCards))]

let typeOfCardArr = [];
let cardTypeValue = 20;
let numberFillArr = [...Array(cardTypeValue)];

let cardTitle = "";

//This function generates the Christmas pictures array from the Christmas folder.
function createChristmasArr(){
    let num = 1;
    let ChristmasArr = [];
    while(num <= 25){
        ChristmasArr.push(`<img src="pictures/Christmas/${num}.png" class="picture" alt="pic">`);
        num++;
    }
    return ChristmasArr;
}

//This function generates the halloween pictures array from the Christmas folder.
function createHalloweenArr(){
    let num = 26;
    let halloweenArr = [];
    while(num <= 50){
        halloweenArr.push(`<img src="pictures/halloween/${num}.png" class="picture" alt="pic">`);
        num++;
    }
    return halloweenArr;
}

//This function gets the array for the generateCards function and set the visibility of 7 X 7 option.
function typeOfCard(){

    cardTypeValue = document.getElementById("card-type").value;
    
    if(cardTypeValue == "100" || cardTypeValue == "50"){
        document.getElementById("seven").disabled = false;
    }else{
        document.getElementById("seven").disabled = true;
    }

    if(cardTypeValue === "halloweenArr"){
        typeOfCardArr = createHalloweenArr();
        cardTitle = "Halloween Bingo";
    }else if(cardTypeValue === "theChristmasArr"){
        typeOfCardArr = createChristmasArr();
        cardTitle = "Christmas Bingo";
    }else{
        numberFillArr = [...Array(Number(cardTypeValue))];
        typeOfCardArr = numberFillArr.fill(numberFillArr.map(item => item = cardTypeValue--))[0];
        cardTitle = "Bingo";
    }
}

//This changes the number of cards displayed.
function changeNumberOfCards(){
    numberOfCards = document.getElementById("card-number").value;
    numberOfCardsArr = [...Array(Number(numberOfCards))]; 
    generateCards();
}

//This changes the size of the card.  I could not use getElement by Classname so I had to use Ids for each item.
function changeCardSize(){

    columns = document.getElementById("card-size").value;
    rows = document.getElementById("card-size").value;
    
    if(rows == "7"){
        document.getElementById("disabled1").disabled = true;
        document.getElementById("disabled2").disabled = true;
        document.getElementById("disabled3").disabled = true;
    }else{
        document.getElementById("disabled1").disabled = false;
        document.getElementById("disabled2").disabled = false;
        document.getElementById("disabled3").disabled = false;
    }
    generateCards();
}

//This rearranges the array so that all cards are different and random.
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

//This function splices the array into smaller arrays so it can fit into a table.
function arraySplice(array, columns){ 
    let newArr = [];
    let count = 1;
    
    while(count <= rows){
        newArr.push(array.splice(0, columns));
        count++;
    }
    return newArr;
}

//This function generates a new card/s.
function generateCards(){
    document.getElementById("cards-container").innerHTML = "";
    numberOfCardsArr.forEach(card => {
        typeOfCard();
        let tableArr = arraySplice(shuffleArray(typeOfCardArr), columns);
        document.getElementById("cards-container").insertAdjacentHTML("beforeend",
    
            `<div class="card-wrapper">
                <table class="card">
                    <h3>${cardTitle}</h3>
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
