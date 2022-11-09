let length = 10;
let mainContainer = document.getElementById('mainContainer');

function gridMaker(){
    let width = 500/length;
    for (let i = 0; i <= (length*length); i++){
        var div = document.createElement('div');
        div.setAttribute('id', 'etchDiv');
        div.setAttribute('style', 'border: 2px solid black');
        div.style.width = width + "px";
        div.style.height = width + "px";
        mainContainer.appendChild(div);
    }
}

gridMaker();