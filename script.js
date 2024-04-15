function handleEditable() {
    
}

function newGoal(targetButton) {
    // CREATE GOAL TEXT
    let goalText =  document.createElement("p");
    goalText.classList.add("goalText","editable");
    goalText.textContent = "New Goal";

    // CREATE GOAL DIV
    let goal = document.createElement("div");
    goal.classList.add("goal");
    goal.appendChild(goalText);
    
    targetButton.parentNode.insertBefore(goal,targetButton);
}

function newClass() {

}