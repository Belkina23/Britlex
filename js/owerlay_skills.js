
const buttons = document.querySelectorAll('.test-button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const parentDiv = button.closest('.test-div');
    const overlayText = parentDiv.querySelector('.test-owerlay-text');
    overlayText.classList.toggle('show');
    
    button.classList.toggle('active');
  });
});