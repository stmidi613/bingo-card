console.log("hello, World")

const ARRAY = [["A1", "A2", "A3", "A4", "A5"]];
let column = 4;
let rows = 4;
let arr = [[1]];

function shuffleArray(ARRAY){
    let shuffledArr = [];
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

console.log(shuffleArray(ARRAY))


window.onload = function(){

    arr.map(array => {
document.getElementById("card").insertAdjacentHTML("beforeend", 
    `<tr>${array.map(item =>
        `<td>${item}</td>`.repeat(column))}
    </tr>`.repeat(rows)
    )
})

}
