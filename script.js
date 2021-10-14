console.log("Hello, World")

const ARRAY = ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10"];
let column = 3;
let rows = 3;
let arr = [[1]];
let shuffledArr = [];

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
    tableArr.map(array => {
    document.getElementById("card").insertAdjacentHTML("beforeend",  
    array.map(item => `<td class="cells">${item}</td>`).join("")
        )
    })
    
}
