const grid = document.getElementById("grid");
const numSquares = 16;

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