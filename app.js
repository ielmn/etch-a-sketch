const sketchPad = document.querySelector('.sketch-container');
const gridSquare = document.querySelector('.box');
const askBtn = document.querySelector('#ask-numbers');
const clear =  document.querySelector('#clear');
const colorsBtn = document.querySelectorAll('.colorsBtn');
const close = document.querySelector('.close');
const slider = document.querySelector('#myRange');
const output = document.querySelector('.result');

let gridAmount = parseInt(slider.value);
let currentState;

output.textContent = `${slider.value} x ${slider.value}`;


function changeState(state) {
    switch(state){
        case 'erase':
            currentState = 'erase'
            break;
        case 'black':
            currentState = 'black'
            break;
        case 'red':
            currentState = 'red'
            break;
        case 'green':
            currentState = 'green'
            break;
        case 'blue':
            currentState = 'blue'
            break;
        default:
            currentState = 'black';
    }
}

let changeGridColor = (e) => {
    if (currentState == 'erase'){
        e.target.style.backgroundColor = '#FFFFFF';
    }else if(currentState == 'red'){
        e.target.style.backgroundColor = 'red';
    }else if(currentState == 'green'){
        e.target.style.backgroundColor = 'green';
    }else if(currentState == 'blue'){
        e.target.style.backgroundColor = 'blue';
    }
    else{
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
            box.addEventListener('mouseover', changeGridColor);
            grid.appendChild(box);
        }   
    }   
}

addGrid(gridAmount);

// Event Listeners
slider.oninput = function() {
    sketchPad.textContent = "";
    output.textContent = `${this.value} x ${this.value}`;
    let rangeVal = parseInt(this.value)
    addGrid(rangeVal);
    gridAmount = (rangeVal);
}

askBtn.addEventListener('click', () => document.querySelector('.bg-modal').style.display = 'flex')

close.addEventListener('click',() => document.querySelector('.bg-modal').style.display = 'none' )

clear.addEventListener('click', () => {
    sketchPad.textContent = "";
    addGrid(gridAmount);
});

colorsBtn.forEach((button) => {
    button.addEventListener('click', () => changeState(button.id));
})