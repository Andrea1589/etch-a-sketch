//Global variables
let selectedPalette = undefined;
let selectedColor = undefined;
let selectedType = undefined;
let selectedTool = undefined;
let currentHue = undefined;
let toggleGradient = 1;

//Initialization
getTool(); 
getPalette();
getType();
setGrid(16);
drawSketch();

function drawSketch(){
    document.onmousedown = function(e){

        document.onmouseover = function(e){

            if (e.target.className == "square") {

            if (selectedTool === 'pen'){
                switch (selectedPalette) {
                        case 'black':
                            e.target.style.backgroundColor = selectedColor;
                            e.target.style.borderColor = selectedColor;
                            break;

                        case 'rainbow':
                            currentHue = getHue(currentHue,1,360); //All colors from 1 to 360
                            e.target.style.backgroundColor = `hsl(${currentHue}, 80%, 60%)`;
                            e.target.style.borderColor = `hsl(${currentHue}, 80%, 60%)`;
                            break;

                        case 'cold':
                            currentHue = getHue(currentHue,170,250); //Colors between 170 and 250
                            e.target.style.backgroundColor = `hsl(${currentHue}, 80%, 70%)`;
                            e.target.style.borderColor = `hsl(${currentHue}, 80%, 70%)`;
                            break;

                        case 'warm':
                            currentHue = getHue(currentHue,1,120); //Colors between 1 and 120
                            e.target.style.backgroundColor = `hsl(${currentHue}, 70%, 40%)`;
                            e.target.style.borderColor = `hsl(${currentHue}, 70%, 40%)`;
                            break;
                                    
                        default:
                            break;
                    }
                } else if (selectedTool==='eraser') {
                    e.target.style.backgroundColor = 'white';
                    e.target.style.borderColor = 'gainsboro';
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

function getHue(currentHue, initialHueRange, finalHueRange){
    let hueValue = undefined;

    switch (selectedType) {
        case 'random':
            hueValue = getRandomInt(initialHueRange, finalHueRange);
            break;

        case 'gradient':
            if(currentHue === 0){
                currentHue = initialHueRange;
            } else if (currentHue >= finalHueRange){
                toggleGradient = -1;
            } else if (currentHue <= initialHueRange){
                toggleGradient = 1;
            }
            hueValue = currentHue + (2 * toggleGradient);   
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

function getTool(){
    const option = document.querySelector('input[name="tool"]:checked');

    if (option) {
        selectedTool = option.value;
    }

    if (selectedTool === 'eraser'){
        //Hide the PALETTE and TYPE fieldset
        document.getElementById("palette").style.display = "none";
        document.getElementById("type").style.display = "none";
        //Initialize PALETTE as Black just when the fieldset is been hidden
        document.getElementsByName("palette")[0].checked = true;
        getPalette();
    } else if (selectedTool === 'pen'){
        //Show the PALETTE and TYPE fieldset
        document.getElementById("palette").style.display = "block";
        document.getElementById("type").style.display = "none";
    }
}

function getPalette(){
    const option = document.querySelector('input[name="palette"]:checked');
    //Initialize HUE when color palette change
    currentHue = 0;

    if (option) {
        selectedPalette = option.value;
    }

    if (selectedPalette === 'black'){
        //Hide the TYPE fieldset
        document.getElementById("type").style.display = "none";
        //Initialize TYPE as Random just when the fieldset is been hidden
        document.getElementsByName("type")[0].checked = true;
        getType();
        //Get current color
        document.getElementById("color-picker").disabled = false;
        getCurrentColor();
    } else {
        //Show the TYPE fieldset
        document.getElementById("type").style.display = "block";
        document.getElementById("color-picker").disabled = true;
    }
}

function getType(){
    const option = document.querySelector('input[name="type"]:checked');

    if (option) {
        selectedType = option.value;
    }
}

function getCurrentColor(){
    const colorPicker = document.getElementById("color-picker");
    selectedColor = colorPicker.value;
}