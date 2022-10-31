setGrid();

document.onmousedown = function(e){
    document.onmousemove = function(e){
        if (e.target.className === "square") {
            e.target.style.backgroundColor = "black";
        }
    }
}

document.onmouseup = function(e){
    document.onmousemove = function(e){
        if (e.target.className === "square") {
            e.target.style.backgroundColor = "none";
        }
    }
}

function setGrid(){
    const numSquares = prompt("How many squares per side do you want?","16");
    const grid = document.getElementById("grid");

    //Remove actual grid (if exists)
    grid.innerHTML = "";

    //Generate NxN grid
    if (numSquares >= 1 && numSquares <= 100){
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
    } else {
        alert("The grid can have min 1 and max 100 squares.");
        setGrid();
    }
}