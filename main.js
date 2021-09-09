let i, j;
let root = document.getElementById("root");

for (i = 1; i <= 10; i++) {
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    root.appendChild(row);

    for (j = 1; j <= 10; j++) {
        let cell = document.createElement("div"); // <div>

        (i === j) ? cell.setAttribute("class", "cell mainCell")
        : (i < j) ? cell.setAttribute("class", "cell upperCell")
        : cell.setAttribute("class", "cell lowerCell");

        cell.innerText = i * j;
        row.appendChild(cell);
    }
}
