let colorPalette = getColors('black');

setGrid(16);
drawSketch();

// function blackPencil(){
//     document.onmousedown = function(e){
//         document.onmouseover = function(e){
//             if (e.target.className === "square") {
//                 e.target.style.backgroundColor = "black";
//                 e.target.style.borderColor = "black";
//             }
//         }
//     }
//     document.onmouseup = function(e){
//         document.onmouseover = function(e){
//             if (e.target.className === "square") {
//                 e.target.style.backgroundColor = "none";
//                 e.target.style.borderColor = "none";
//             }
//         }
//     }
// }

function drawSketch(){
    document.onmousedown = function(e){
        document.onmouseover = function(e){
            if (e.target.className == "square") {
                let number = getRandomInt(0,colorPalette.length-1);
                //console.log(number);
                e.target.style.backgroundColor = colorPalette[number];
                e.target.style.borderColor = colorPalette[number];
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

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showGrid(numSquares){
    document.getElementById("grid-size").innerText = "Size: " + numSquares + " x " + numSquares;
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

function setColors(){
    const option = document.querySelector('input[name="color"]:checked');
    //console.log(option.value);
    if (option) {
        colorPalette = getColors(option.value);
    }
}

function getColors(userSelection){
    let colors = undefined;

    switch (userSelection) {
        case "black":
            colors=['black'];
            break;

        case "rainbow":
            colors=['#ff0000', '#fc4444', '#fc6404', '#fcd444', '#8cc43c', '#029658', '#1abc9c', '#5bc0de', '#6454ac', '#fc8c84'];
            break;

        case "cold":
            colors=['#344464', '#548ca4', '#549cac', '#2c445c', '#a4ccd4', '#acbccc', '#b4c4d4', '#acd4cc', '#5c8ca4', '#52b3d0'];
            break;

        case "warm":
            colors=['#793f0d', '#ac703d', '#e49969', '#6e7649', '#9d9754', '#dfd27c', '#dbca69', '#855723', '#eec59a', '#c7c397'];
            break;
                    
        default:
            break;
    }
    return(colors);
}