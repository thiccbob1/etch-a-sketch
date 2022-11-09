let length = 17;
let mainContainer = document.getElementById('mainContainer');

function gridMaker(){
    let width = 500/length;
    for (let i = 1; i <= (length*length); i++){
        var div = document.createElement('div');
        div.setAttribute('id', 'etchDiv');
        div.setAttribute('style', 'border: 1px solid black');
        div.style.width = width + "px";
        div.style.height = width + "px";
        mainContainer.appendChild(div);
        console.log(i);
    }
}

gridMaker();