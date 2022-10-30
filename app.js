const grid = document.getElementById("grid");
const numSquares = 16;

console.log(numSquares);

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