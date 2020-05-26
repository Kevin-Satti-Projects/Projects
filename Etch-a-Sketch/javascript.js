function createGrid (size, selectedColor) {
    document.documentElement.style.setProperty("--columns", size);
    for (let i=1; i<=(size*size); i++){
        let box = document.createElement("div")
        box.className = "box";
        box.id = i;
        box.style.backgroundColor = "white";
        box.height = document.getElementById("container").offsetHeight / (size);
        box.width = box.height;
        box.addEventListener("mouseover", function changeColour(e){
            if (selectedColor == "black"){
                e.target.style.backgroundColor = selectedColor;
            }
            else if (selectedColor == "rainbow"){
                e.target.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
            }
            
        })
        document.getElementById("container").appendChild(box);      
    }
    return(size);
}

function clearGrid () {
    document.getElementById("container").innerHTML = "";
}

document.getElementById("colours").addEventListener("click", function changeSelectedColor(){
    selectedColor = "rainbow";
    let nodeTotal = document.getElementById("container").childNodes.length;
    for (let i=1; i<=(nodeTotal); i++){
        document.getElementById(i).removeEventListener("mouseover", function changeColour(e){
            if (selectedColor == "black"){
                e.target.style.backgroundColor = selectedColor;
            }
            else if (selectedColor == "rainbow"){
                e.target.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
            }
        });
        document.getElementById(i).addEventListener("mouseover", function changeColour(e){
            if (selectedColor == "black"){
                e.target.style.backgroundColor = selectedColor;
            }
            else if (selectedColor == "rainbow"){
                e.target.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
            }
        });
    }
});

document.getElementById("black").addEventListener("click", function changeSelectedColor(){
    selectedColor = "black";
    let nodeTotal = document.getElementById("container").childNodes.length;
    for (let i=1; i<=(nodeTotal); i++){
        document.getElementById(i).removeEventListener("mouseover", function changeColour(e){
            if (selectedColor == "black"){
                e.target.style.backgroundColor = selectedColor;
            }
            else if (selectedColor == "rainbow"){
                e.target.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
            }
        });
        document.getElementById(i).addEventListener("mouseover", function changeColour(e){
            if (selectedColor == "black"){
                e.target.style.backgroundColor = selectedColor;
            }
            else if (selectedColor == "rainbow"){
                e.target.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
            }
        });
    }
});

document.getElementById("white").addEventListener("click", function allWhite() {
    let nodeTotal = document.getElementById("container").childNodes.length;
    for (let i=1; i<=(nodeTotal); i++){
        document.getElementById(i).style.backgroundColor = "white";
    }        
});

selectedColor = "black";
createGrid(16, "black");

document.getElementById("size").addEventListener("click", function getSize (){
    let newSize = prompt("Enter a new width and height", "16");
    clearGrid();
    createGrid(newSize, selectedColor);
});


