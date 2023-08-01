const checkButton = document.getElementById('checkButton');
const resetButton = document.getElementById('resetButton');
const resultMessage = document.getElementById('resultMessage');

function calculateAge() {
  const day = parseInt(document.getElementById('dayInput').value);
  const month = parseInt(document.getElementById('monthInput').value);
  const year = parseInt(document.getElementById('yearInput').value);
  const name = document.getElementById('nameInput').value;

  const today = new Date();
  const birthDate = new Date(year, month - 1, day);

  const ageInMilliseconds = today - birthDate;
  const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

  if (isNaN(ageInYears)) {
    resultMessage.textContent = 'Por favor, insira uma data válida.';
  } else {
    const age = Math.floor(ageInYears);
    if (age >= 18) {
      resultMessage.textContent = `${name}, você é maior de idade com ${age} anos!`;
    } else {
      resultMessage.textContent = `${name}, você é menor de idade com ${age} anos.`;
    }
  }
}

function resetForm() {
  document.getElementById('nameInput').value = '';
  document.getElementById('dayInput').value = '';
  document.getElementById('monthInput').value = '';
  document.getElementById('yearInput').value = '';
  resultMessage.textContent = '';
}

checkButton.addEventListener('click', calculateAge);
resetButton.addEventListener('click', resetForm);


