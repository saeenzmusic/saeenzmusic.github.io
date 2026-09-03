document.getElementById('year').textContent = new Date().getFullYear();

const switchToggle = document.getElementById('switchToggle');
const switchLabel = document.getElementById('switchLabel');

let pressed = false;
switchToggle.addEventListener('click', () => {
  pressed = !pressed;
  switchToggle.setAttribute('aria-pressed', String(pressed));
  switchLabel.textContent = pressed ? 'identidad: SAEENZ' : 'alter ego: UNDERSWITCH';
});
