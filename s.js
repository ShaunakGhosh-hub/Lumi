// Function to navigate to the next stage
function nextStage(stageId) {
    // Hide all stages
    const stages = document.querySelectorAll('.stage');
    stages.forEach(stage => stage.style.display = 'none');
    
    // Show the selected stage
    document.getElementById(stageId).style.display = 'block';
}

// Show the quiz after all stages
function showQuiz() {
    document.getElementById('waterfall-model').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
}

// Submit the quiz
function submitQuiz() {
    const form = document.getElementById('quiz-form');
    let score = 0;

    // Check answers
    if (form.q1.value === "Maintenance") {
        score++;
    }
    if (form.q2.value === "Feasibility Study") {
        score++;
    }

    // Display result
    const result = document.getElementById('result');
    result.innerHTML = `Your score: ${score}/2`;
}
