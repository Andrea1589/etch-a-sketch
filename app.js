setGrid(16);

document.onmousedown = function(e){
    document.onmousemove = function(e){
        if (e.target.className === "square") {
            e.target.style.backgroundColor = "black";
            e.target.style.borderColor = "gray";
        }
    }
}

document.onmouseup = function(e){
    document.onmousemove = function(e){
        if (e.target.className === "square") {
            e.target.style.backgroundColor = "none";
            e.target.style.borderColor = "none";
        }
    }
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