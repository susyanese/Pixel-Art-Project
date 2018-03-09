//object defined with variables

var Artmaker = {
    color: document.getElementById("colorPicker"),
    rows: document.getElementById("input_height"),
    columns: document.getElementById("input_width"),
    submit: document.getElementById("sizePicker"),
    canvas: document.getElementById("pixel_canvas")
};

//function that creates the grid
function makeGrid() {
    Artmaker.canvas.innerHTML = "";
    while (Artmaker.canvas.rows.length > 0) {
        Artmaker.canvas.deleteRow(0);
    }
    for (var i = 0; i < Artmaker.rows.value; i++) {
        var row = Artmaker.canvas.insertRow(i);
        row.setAttribute("class", "row");
        for (var j = 0; j < Artmaker.columns.value; j++) {
            var cell = row.insertCell(j);
            cell.addEventListener("click", function(e) {
                e.target.style.backgroundColor = Artmaker.color.value;
            });
        }
    }
    return false;
}

// on submit call the makeGrid()
Artmaker.submit.addEventListener("submit", function(e) {
    e.preventDefault();
    makeGrid();

});
