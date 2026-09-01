let totalKm = 0;

function logActivity() {
    const weeklyGoal = parseFloat(document.getElementById('weekly-goal').value);
    const dailyKm = parseFloat(document.getElementById('daily-km').value);

    if (isNaN(weeklyGoal) || isNaN(dailyKm)) {
        alert("Please enter valid numbers for both fields.");
        return;
    }

    totalKm += dailyKm;
    const remainingKm = Math.max(0, weeklyGoal - totalKm);
    const daysLeft = 7; 
    const dailyPace = remainingKm / daysLeft;

    document.getElementById('total-km').innerText = totalKm.toFixed(1);
    document.getElementById('remaining-km').innerText = remainingKm.toFixed(1);
    document.getElementById('daily-pace').innerText = dailyPace.toFixed(1);

    document.getElementById('daily-km').value = '';
}