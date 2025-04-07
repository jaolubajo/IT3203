document.getElementById("quizForm").addEventListener("submit", function (e) {
    e.preventDefault(); // this prevents the page from refreshing

    let score = 0;
    let total = 5; // amount of questions
    let resultHTML = "<h2>Results</h2>";

    // Q1- fill in the blank
    let q1 = document.querySelector("input[name='q1']").value.trim().toLowerCase();
    if (q1 === "data") {
        score++;
        resultHTML += "<p>Q1: ✔️ Correct</p>";
    } else {
        resultHTML += "<p>Q1: ❌ Incorrect (Correct: data)</p>";
    }

    // Q2-radio
    let q2 = document.querySelector("input[name='q2']:checked");
    if (q2 && q2.value === "b") {
        score++;
        resultHTML += "<p>Q2: ✔️ Correct</p>";
    } else {
        resultHTML += "<p>Q2: ❌ Incorrect (Correct: b - HyperText Markup Language)</p>";
    }

    // Q3-radio
    let q3 = document.querySelector("input[name='q3']:checked");
    if (q3 && q3.value === "a") {
        score++;
        resultHTML += "<p>Q3: ✔️ Correct</p>";
    } else {
        resultHTML += "<p>Q3: ❌ Incorrect (Correct: a - Sub cookies)</p>";
    }

    // Q4-checkbox 
    let q4Selected = Array.from(document.querySelectorAll("input[name='q4']:checked")).map(cb => cb.value);
    let correctQ4 = ["a", "b", "c"];
    let isCorrectQ4 = correctQ4.every(val => q4Selected.includes(val)) && q4Selected.length === correctQ4.length;

    if (isCorrectQ4) {
        score++;
        resultHTML += "<p>Q4: ✔️ Correct</p>";
    } else {
        resultHTML += "<p>Q4: ❌ Incorrect (Correct: a, b, c)</p>";
    }

    // Q5-radio
    let q5 = document.querySelector("input[name='q5']:checked");
    if (q5 && q5.value === "a") {
        score++;
        resultHTML += "<p>Q5: ✔️ Correct</p>";
    } else {
        resultHTML += "<p>Q5: ❌ Incorrect (Correct: a - Track user behaviors)</p>";
    }

    // Final Score
    resultHTML += `<p><strong>Score: ${score}/${total}</strong></p>`;
    resultHTML += `<p><strong>${score >= 3 ? "✅ Passed!" : "❌ Try Again!"}</strong></p>`;
    resultHTML += `<button onclick="location.reload()">Restart Quiz</button>`;

    document.getElementById("result").innerHTML = resultHTML;
});
