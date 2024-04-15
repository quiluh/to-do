function handleEditable() {
    
}

function newGoal(targetButton) {
    // CREATE GOAL TEXT
    let goalText = document.createElement("p");
    goalText.classList.add("goalText","editable");
    goalText.textContent = "New Goal";
    goalText.onclick = function() {
        handleEditable()
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
        handleEditable()
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