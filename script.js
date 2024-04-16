function handleEditable(targetText) {
    // CREATE EDIT AREA
    let editArea = document.createElement("textarea");
    editArea.classList.add("editArea");
    editArea.value = targetText.innerHTML;

    // EDIT
    editArea.onkeydown = function(event) {
        if (event.key == "Enter") {
            this.blur();
        }
    }

    // ENTERED
    editArea.onblur = function() {
        if (editArea.value.trim() === "") {
            editArea.parentNode.remove();
        } else {
            targetText.innerHTML = editArea.value;            
        }
        editArea.replaceWith(targetText);
    }

    targetText.replaceWith(editArea);
    editArea.focus();
}

function newGoal(targetButton) {
    // CREATE GOAL TEXT
    let goalText = document.createElement("p");
    goalText.classList.add("goalText","editable");
    goalText.textContent = "New Goal";
    goalText.onclick = function() {
        handleEditable(goalText)
    };

    // CREATE GOAL DIV
    let goal = document.createElement("div");
    goal.classList.add("goal");
    goal.appendChild(goalText);
    
    targetButton.parentNode.insertBefore(goal,targetButton);
}

function newClass(targetButton) {
    // CREATE CLASS TEXT
    let classText = document.createElement("p");
    classText.classList.add("classText","editable");
    classText.textContent = "New Class";
    classText.onclick = function() {
        handleEditable(classText)
    };

    // CREATE ADD
    let add = document.createElement("div");
    add.classList.add("add");
    add.textContent = "+";
    add.onclick = function() {
        newGoal(add)
    }

    // CREATE CLASS DIV
    let classDiv = document.createElement("div");
    classDiv.classList.add("goalClass");
    classDiv.appendChild(classText);
    classDiv.appendChild(add);

    targetButton.parentNode.insertBefore(classDiv,targetButton);

}