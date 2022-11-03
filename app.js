let selectedPalette = undefined;
let selectedType = undefined;
let currentHue = undefined;
let toggleGradient = 1;

getPalette();
getType();
setGrid(16);
drawSketch();

function drawSketch(){
    console.log(document.eve)
    document.onmousedown = function(e){

        document.onmouseover = function(e){

            if (e.target.className == "square") {

            switch (selectedPalette) {
                    case 'black':
                        e.target.style.backgroundColor = 'black';
                        e.target.style.borderColor = 'black';
                        break;

                    case 'rainbow':
                        currentHue = getHue(currentHue,1,256);
                        e.target.style.backgroundColor = `hsl(${currentHue}, 80%, 60%)`;
                        e.target.style.borderColor = `hsl(${currentHue}, 80%, 60%)`;
                        break;

                    case 'cold':
                        currentHue = getHue(currentHue,160,255); //
                        e.target.style.backgroundColor = `hsl(${currentHue}, 80%, 65%)`;
                        e.target.style.borderColor = `hsl(${currentHue}, 80%, 65%)`;
                        break;

                    case 'warm':
                        currentHue = getHue(currentHue,1,100); //Warm colors from 1 to 100
                        e.target.style.backgroundColor = `hsl(${currentHue}, 70%, 40%)`;
                        e.target.style.borderColor = `hsl(${currentHue}, 70%, 40%)`;
                        break;
                                
                    default:
                        break;
                }
            }
        }
    }
    
     document.onmouseup = function(e){
   
         document.onmouseover = function(e){
    
             if (e.target.className === "square") {
    
                 e.target.style.backgroundColor = "none";
                 e.target.style.borderColor = "none";
             }
         }
     }
 }

function getHue(currentHue, initialHue, finalHue){
    let hueValue = undefined;

    switch (selectedType) {
        case 'random':
            hueValue = getRandomInt(initialHue, finalHue);
            break;

        case 'gradient':
            if(currentHue === 0){
                currentHue = initialHue;
            } else if (currentHue >= finalHue){
                toggleGradient = -1;
            } else if (currentHue <= initialHue){
                toggleGradient = 1;
            }
            hueValue = currentHue + (2 * toggleGradient);   
            console.log(currentHue);
            break;

        default:
            break;
    }

    return hueValue;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showGrid(numSquares){
    document.getElementById("grid-size").innerText = "SIZE: " + numSquares + " x " + numSquares;
    setGrid(numSquares);
}

function setGrid(numSquares){
    const grid = document.getElementById("grid");

    //Remove actual grid (if exists)
    grid.innerHTML = "";

    //Generate NxN grid
        for (let i = 0; i < numSquares; i++) {
            const row = document.createElement("div");
            row.className = "row";
            grid.appendChild(row);
            
            for (let j = 0; j < numSquares; j++) {
                const square = document.createElement("div");
                square.className = "square";
                row.appendChild(square);
            }
        }
}

function clearGrid(){
    const gridSize = document.getElementById("grid-range").value;
    setGrid(gridSize);
}

function getPalette(){
    const option = document.querySelector('input[name="color"]:checked');

    //Initialize hue when color palette change
    currentHue = 0;

    if (option) {
        selectedPalette = option.value;
    }
}

function getType(){
    const option = document.querySelector('input[name="type"]:checked');

    if (option) {
        selectedType = option.value;
    }
}