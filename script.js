function toggleTutorial() {
    const tutorialSection = document.getElementById('tutorial-section');
    if (tutorialSection.style.display === 'none') {
        tutorialSection.style.display = 'block';
    } else {
        tutorialSection.style.display = 'none';
    }
}
