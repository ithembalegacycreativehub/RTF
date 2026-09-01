let totalKm = 0;

function logActivity() {
    const weeklyGoalInput = document.getElementById('weekly-goal');
    const dailyKmInput = document.getElementById('daily-km');

    const weeklyGoal = parseFloat(weeklyGoalInput.value);
    const dailyKm = parseFloat(dailyKmInput.value);

    if (isNaN(weeklyGoal) || isNaN(dailyKm)) {
        alert("Please enter valid numbers for both fields.");
        return;
    }

    if (dailyKm <= 0) {
        alert("Please enter a positive number for kilometers.");
        return;
    }

    totalKm += dailyKm;
    const remainingKm = Math.max(0, weeklyGoal - totalKm);
    
    // Assuming a standard 7-day week pacing model
    const daysLeft = 7; 
    const dailyPace = remainingKm / daysLeft;

    document.getElementById('total-km').innerText = totalKm.toFixed(1);
    document.getElementById('remaining-km').innerText = remainingKm.toFixed(1);
    document.getElementById('daily-pace').innerText = dailyPace.toFixed(1);

    // Reset daily input field for convenience
    dailyKmInput.value = '';
}