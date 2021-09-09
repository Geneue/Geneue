let i, j;
let root = document.getElementById("root");

for (i = 1; i <= 10; i++) {
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    root.appendChild(row);

    for (j = 1; j <= 10; j++) {
        let cell = document.createElement("div"); // <div>

        if (i === j) { // <div class="a b"
            cell.setAttribute("class", "cell mainCell");
        }
        else if (i < j) {
            cell.setAttribute("class", "cell upperCell");
        } else {
            cell.setAttribute("class", "cell lowerCell");
        }

        cell.innerText = i * j;
        row.appendChild(cell);
    }
}
