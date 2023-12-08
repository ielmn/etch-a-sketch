const sketchPad = document.querySelector('.sketch-container');
const gridSquare = document.querySelector('.box');
const askBtn = document.querySelector('#ask-numbers');
const clear =  document.querySelector('#clear');
const colorsBtn = document.querySelectorAll('.colorsBtn');
const close = document.querySelector('.close');
const slider = document.querySelector('#myRange');
const output = document.querySelector('.result');
const rainbow = document.querySelector('#rainbow')

let gridAmount = parseInt(slider.value);
let currentState;
let colorPick;

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
        case 'rainbow':
            currentState = 'rainbow'
            break;
        default:
            currentState = 'black';
    }
}

function getRandomColor(){
    let maxVal = 0xFFFFFF; 
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}

function updateOpacity(e){
    if (e.target.style.opacity <= 1) {
        e.target.style.opacity = +e.target.style.opacity + 0.1;
      }
}

let changeGridColor = (e) => {
    if (currentState == 'erase'){
        e.target.style.opacity = 0;
    }else if(currentState == 'red'){
        colorPick = 'red'
        e.target.style.backgroundColor = colorPick;
        updateOpacity(e);
    }else if(currentState == 'green'){
        colorPick = 'green';
        e.target.style.backgroundColor = colorPick;
        updateOpacity(e);
    }else if(currentState == 'blue'){
        colorPick = 'blue';
        e.target.style.backgroundColor = colorPick;
        updateOpacity(e);
    }else if(currentState == 'rainbow'){
        colorPick = getRandomColor();
        e.target.style.backgroundColor = colorPick;
        updateOpacity(e);
    }else{
        colorPick = 'black';
        e.target.style.backgroundColor = colorPick;
        updateOpacity(e);
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