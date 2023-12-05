const sketchPad = document.querySelector('.sketch-container');
const gridSquare = document.querySelector('.box');
const askBtn = document.querySelector('#ask-numbers');
const clear =  document.querySelector('#clear');
const eraseBtn = document.querySelector('#erase');
const blackBtn = document.querySelector('#black');

let gridAmount = 6;
let currentState;

function changeState(state) {
    switch(state){
        case 'erase':
            currentState = 'erase'
            break;
        case 'black':
            currentState = 'black'
            break;
        default:
            currentState = 'black';
    }
}

let changeGridColor = (e) => {
    if (currentState == 'erase'){
        e.target.style.backgroundColor = '#FFFFFF';
    }else{
        e.target.style.backgroundColor = 'black';
    }
};

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
    console.log(currentState)
});

clear.addEventListener('click', () => {
    sketchPad.textContent = "";
    addGrid(gridAmount);
});

eraseBtn.addEventListener('click', () => changeState('erase'));
blackBtn.addEventListener('click', () => changeState('black'));