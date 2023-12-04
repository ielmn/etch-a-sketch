const sketchPad = document.querySelector('.sketch-container');
// const boxes = document.querySelectorAll('.grid');
const gridSquare = document.querySelector('.box');
const askBtn = document.querySelector('#ask-numbers');
const clear =  document.querySelector('#clear');

let changeGridColor = (e) => e.target.classList.add('toBlack');
let gridAmount = 6;

function addGrid(num){
    for (let row = 0; row < num; row++){
        const grid = document.createElement('div');
        sketchPad.appendChild(grid);
        grid.classList.add('grid');
        for (let col = 0; col < num; col++){
            const box = document.createElement('div');
            box.classList.add('box');
            box.addEventListener('mouseover', changeGridColor)
            grid.appendChild(box);
        }   
    }   
}

function checkAmount(amount){
    return (amount > 64 || amount < 1);
}

addGrid(gridAmount);

// Event Listeners
askBtn.addEventListener('click', () => {
    let amount = 0;
    while (checkAmount(amount)){
        let ask = prompt('Enter grid amount', '6');
        amount = parseInt(ask);
    }
    sketchPad.textContent = "";
    gridAmount = amount;
    addGrid(amount);
});

clear.addEventListener('click', () => {
    sketchPad.textContent = "";
    addGrid(gridAmount);
});