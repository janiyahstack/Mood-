let moodCounts = JSON.parse(localStorage.getItem('moodCounts') || '{}');


const overlay = document.getElementById('overlay');
if (localStorage.getItem('useremail')) {
  overlay.style.display = 'none';
}


function bgChange(element) {
  const color = element.getAttribute("data-color");
  const mood = element.getAttribute("data-mood");

  document.body.style.background = color;

  moodCounts[mood] = (moodCounts[mood] || 0) + 1;
  localStorage.setItem('moodCounts', JSON.stringify(moodCounts));

  const total = Object.values(moodCounts).reduce((a, b) => a + b, 0);
  document.querySelector('#count').innerText = total;
}


const startBtn = document.getElementById('startBtn');
const loginError = document.getElementById('loginError');
const emailInput = document.getElementById('email');

startBtn.addEventListener('click', function () {
  const email = emailInput.value.trim();
  if (email === "") {
    loginError.textContent = "Please enter your email.";
    return;
  }
  localStorage.setItem("useremail", email);
  overlay.style.display = 'none';
});
