let length = 16;
var div;
let mainContainer = document.getElementById('mainContainer');
let sizeButton = document.getElementById('sizeButton');
let resetButton = document.getElementById('resetButton');

function gridMaker(){
    let width = 500/length;
    for (let i = 1; i <= (length*length); i++){
        div = document.createElement('div')
        div.setAttribute('id', 'etchDiv');
        div.setAttribute('style', 'border: 1px solid black;');
        div.style.backgroundColor = ("white");
        div.style.width = width + "px";
        div.style.height = width + "px";
        mainContainer.appendChild(div);
    }
    let divs = document.querySelectorAll('#etchDiv');
    divs.forEach(divs => {
        divs.addEventListener('mouseover', () => {
        divs.style.backgroundColor = "black";
    })
});
}

gridMaker();

function changeSize(){
    length = parseInt(prompt("Grid Size: "))
    while (mainContainer.firstChild){
        mainContainer.removeChild(mainContainer.firstChild);
    }
    gridMaker();
}

function reset(){
    while (mainContainer.firstChild){
        mainContainer.removeChild(mainContainer.firstChild);
    }
    gridMaker();
}

sizeButton.addEventListener('click', changeSize);
resetButton.addEventListener('click', reset);