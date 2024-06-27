// Initialize scores from storage
let localScore = localStorage.getItem('localScore') ? parseInt(localStorage.getItem('localScore')) : 0;
let sessionScore = sessionStorage.getItem('sessionScore') ? parseInt(sessionStorage.getItem('sessionScore')) : 0;

// Display scores
document.getElementById('localScore').textContent = localScore;
document.getElementById('sessionScore').textContent = sessionScore;

// Increment button click event
document.getElementById('incrementBtn').addEventListener('click', () => {
    // Increment scores
    localScore++;
    sessionScore++;

    // Update scores in storage
    localStorage.setItem('localScore', localScore);
    sessionStorage.setItem('sessionScore', sessionScore);

    // Update scores in the DOM
    document.getElementById('localScore').textContent = localScore;
    document.getElementById('sessionScore').textContent = sessionScore;
});
