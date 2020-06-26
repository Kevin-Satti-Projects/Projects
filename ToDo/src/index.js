let projectList = ["Chores", "Chinese", "Coding"];
let toDo1 = ["Take out the trash", "Clean floors", "Weeding", "Wash up"];
let due1 = ["23/06/2020", "23/06/2020", "24/06/2020", "27/06/2020"];
let priority1 = ["High", "Low", "Medium", "Medium"];
let notes1 = ["Trash goes out on a Tuesday.", "N/A", "N/A", "N/A"];
let toDo2 = ["Watch movie", "Review old words"];
let toDo3 = ["Complete next Odin Project lesson"];
let due2 = ["26/06/2020", "04/07/2020"];
let due3 = ["30/06/2020"];
let priority2 = ["High", "Low"];
let priority3 = ["High"];
let notes2 = ["Ne Zha", "N/A"];
let notes3 = ["To Do List Website"];
let toDo = [toDo1, toDo2, toDo3];
let due = [due1, due2, due3];
let priority = [priority1, priority2, priority3];
let notes = [notes1, notes2, notes3];
let currentButton = document.getElementById("Project1Button");
let toDoName;
let toDoDate;
let toDoPriority;
let toDoNotes;
let newCheckbox;
let newText;

function clickedProjectButton (button) {
    if (button.id == "NewProjectButton") {
        let newProjectName = prompt("New Project's Name:");
        let numberOfButtons = document.getElementById("tabs").childElementCount;
        let newTab = document.createElement("button");
        newTab.id = "Project" + numberOfButtons + "Button";
        newTab.classList.add("tab");
        newTab.style.marginRight = "4px";
        let text = document.createTextNode(newProjectName);
        newTab.appendChild(text);
        button.parentNode.insertBefore(newTab, button);
        removeProjectButtonClickEvents();
        addProjectButtonClickEvents();
        currentButton = document.querySelector(".active");
    }
    else {
        if(! (currentButton == null)){
            currentButton.classList.remove("active");
        }
        currentButton = button;
        currentButton.classList.add("active");
        document.querySelectorAll('li').forEach(li => {li.parentNode.removeChild(li);});
        let index = Number(button.id.replace(/\D/g,'')) - 1;
        for(let i = 0; i < toDo[index].length; i++){
            let toDoHolder = document.createElement("li");
            let toDoText = document.createTextNode(toDo[index][i]);
            toDoHolder.appendChild(toDoText);
            document.getElementById("toDoColumn").appendChild(toDoHolder);
            let dateHolder = document.createElement("li");
            let dateText = document.createTextNode(due[index][i]);
            dateHolder.appendChild(dateText);
            document.getElementById("datesColumn").appendChild(dateHolder);
            let priorityHolder = document.createElement("li");
            let priorityText = document.createTextNode(priority[index][i]);
            priorityHolder.appendChild(priorityText);
            document.getElementById("priorityColumn").appendChild(priorityHolder);
            let notesHolder = document.createElement("li");
            let notesText = document.createTextNode(notes[index][i]);
            notesHolder.appendChild(notesText);
            document.getElementById("notesColumn").appendChild(notesHolder);
        }        
    }
}

function removeProjectButtonClickEvents () {
    let buttons = [];
    for(let i = 0; i < document.getElementById("tabs").childElementCount; i++){
        buttons.push(document.getElementById("tabs").getElementsByTagName("button")[i]);
        document.getElementById("tabs").getElementsByTagName("button")[i].id = "Project" + String(Number(i + 1)) + "Button";
        if(i == document.getElementById("tabs").childElementCount - 1){
            document.getElementById("tabs").getElementsByTagName("button")[i].id = "NewProjectButton";
        }
    }
    buttons.forEach(button => {
        button.parentNode.replaceChild(button.cloneNode(true), button);
    });
}

function addProjectButtonClickEvents () {
    let buttons = [];
    for(let i = 0; i < document.getElementById("tabs").childElementCount; i++){
        buttons.push(document.getElementById("tabs").getElementsByTagName("button")[i]);
    }
    buttons.forEach(button => {button.addEventListener("click", function () {
        clickedProjectButton(button)}
        );});
}

function clickedDeleteProjectButton () {
    if(!(document.querySelector(".active") == null)) {
        let check = confirm("Delete Project: " + document.querySelector(".active").innerHTML + "?");
        if(check == true){
            document.querySelectorAll('li').forEach(li => {li.parentNode.removeChild(li);});
            let currentButton = document.querySelector(".active");
            let currentProjectNumber = Array.prototype.indexOf.call(document.getElementById("tabs").children, currentButton);
            toDo.splice(currentProjectNumber, 1);
            due.splice(currentProjectNumber, 1);
            priority.splice(currentProjectNumber, 1);
            notes.splice(currentProjectNumber, 1);
            currentButton.parentNode.removeChild(currentButton);
            removeProjectButtonClickEvents();
            addProjectButtonClickEvents();
        }
    }    
}


function cancelToDoButtonClicked () {
    document.getElementById("newToDoName").value = "";
    document.getElementById("newToDoDate").value = "";
    document.getElementById("priorityHigh").checked = false;
    document.getElementById("priorityMedium").checked = false;
    document.getElementById("priorityLow").checked = false;
    document.getElementById("newToDoNotes").value = "";
    document.getElementById("newToDoForm").style.display = "none";
}

function addToDoButtonClicked () {
    toDoName = document.getElementById("newToDoName").value;
    if(toDoName == ""){
        toDoName = "N/A";
    }
    toDoDate = document.getElementById("newToDoDate").value;
    if(toDoDate == ""){
        toDoDate = "N/A";
    }
    toDoPriority = "Low";
    if(document.getElementById("priorityHigh").checked == true) {
        toDoPriority = "High";
    };
    if(document.getElementById("priorityMedium").checked == true) {
        toDoPriority = "Medium";
    };
    if(document.getElementById("priorityLow").checked == true) {
        toDoPriority = "Low"
    };
    toDoNotes = document.getElementById("newToDoNotes").value;
    if(toDoNotes == ""){
        toDoNotes = "N/A";
    }
    let currentProject = document.querySelector(".active");
    let index = Number(currentProject.id.replace(/\D/g,'')) - 1;
    let checkExists = toDo[index];
    if(checkExists == undefined){
        toDo[index] = [];
        due[index] = [];
        priority[index] = [];
        notes[index] = [];
    }
    toDo[index].push(toDoName);
    due[index].push(toDoDate);
    priority[index].push(toDoPriority);
    notes[index].push(toDoNotes);
    clickedProjectButton(currentProject);
    cancelToDoButtonClicked();
}

function clickedNewToDoButton () {
    if(!(document.querySelector(".active") == null)) {
        document.getElementById("newToDoForm").style.display = "block";       
    }
}

function clickedDeleteToDoButton () {
    if(!(document.querySelector(".active") == null)) {
        let currentProjectName = document.querySelector(".active");
        let index = Number(currentProjectName.id.replace(/\D/g,'')) - 1;
        let checkUp = toDo[index];
        if(!(checkUp == undefined) && !(checkUp.length == 0)) {
            for(let i = 0; i < toDo[index].length; i++){
                newCheckbox = document.createElement("input");
                newCheckbox.type = "checkbox";
                newCheckbox.name = i;
                newCheckbox.value = toDo[index][i];
                newText = document.createTextNode(toDo[index][i]);
                document.getElementById("checkboxHolder").appendChild(newCheckbox);
                document.getElementById("checkboxHolder").appendChild(newText);
                document.getElementById("checkboxHolder").appendChild(document.createElement("div"));
            }
            document.getElementById("deleteToDoForm").style.display = "block";
        }
    }
    
}

function confirmDeleteButtonClicked() {
    let currentProject = document.querySelector(".active");
    let index = Number(currentProject.id.replace(/\D/g,'')) - 1;
    let checkedBoxesArray = [];
    let checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
    for (let i = 0; i < checkboxes.length; i++) {
        checkedBoxesArray.push(Number(checkboxes[i].name));
    }
    for (let j = checkedBoxesArray.length - 1; j >= 0; j--) {
        toDo[index].splice(checkedBoxesArray[j], 1);
        due[index].splice(checkedBoxesArray[j], 1);
        priority[index].splice(checkedBoxesArray[j], 1);
        notes[index].splice(checkedBoxesArray[j], 1);
    }
    document.getElementById("checkboxHolder").innerHTML = "";
    document.getElementById("deleteToDoForm").style.display = "none";
    clickedProjectButton(currentProject);
}

document.getElementById("newToDoButton").addEventListener("click", function () {
    clickedNewToDoButton();
});

document.getElementById("deleteToDoButton").addEventListener("click", function () {
    clickedDeleteToDoButton();
})

document.getElementById("deleteProjectButton").addEventListener("click", function () {
    clickedDeleteProjectButton();
});

document.getElementById("addToDoButton").addEventListener("click", function () {
    addToDoButtonClicked();
});

document.getElementById("cancelToDoButton").addEventListener("click", function () {
    cancelToDoButtonClicked();
});

document.getElementById("confirmDeleteButton").addEventListener("click", function () {
    confirmDeleteButtonClicked();
})

addProjectButtonClickEvents();