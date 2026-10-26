const wishButton = document.querySelector('#wish-button');
const surprise = document.querySelector('#surprise');

wishButton.addEventListener('click', () => {
  surprise.hidden = false;
  wishButton.textContent = 'Wish sent with love ♥';
  wishButton.disabled = true;
  wishButton.style.cursor = 'default';
  wishButton.style.opacity = '0.9';
});
