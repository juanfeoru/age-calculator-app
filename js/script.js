const $dayInput = document.getElementById('day');
const $monthInput = document.getElementById('month');
const $yearInput = document.getElementById('year');
const $buttonDate = document.getElementById('convert-date');
const $labelDay = document.getElementById('label-day');
const $labelMonth = document.getElementById('label-month');
const $labelYear = document.getElementById('label-year');
const $errorTextDay = document.getElementById('error-text-day');
const $errorTextMonth = document.getElementById('error-text-month');
const $errorTextYear = document.getElementById('error-text-year');
const $calculateYears = document.getElementById('calculate-years');
const $calculateMonths = document.getElementById('calculate-months');
const $calculateDays = document.getElementById('calculate-days');

const messages = {
  0: 'This field is required',
  1: 'Must be a valid day',
  2: 'Must be a valid month',
  3: 'Must be in the past',
  4: 'Must be a valid date',
};

const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth() + 1;
const currentYear = currentDate.getFullYear();

$buttonDate.addEventListener('click', () => {
  let hasError = false;

  const day = Number($dayInput.value);
  const month = Number($monthInput.value);
  const year = Number($yearInput.value);

  const inputDate = new Date(year, month - 1, day);

  if (!day) {
    showError($dayInput, $labelDay, $errorTextDay, messages[0]);
    hasError = true;
  } else if (day < 1 || day > 31) {
    showError($dayInput, $labelDay, $errorTextDay, messages[1]);
    hasError = true;
  } else {
    clearError($dayInput, $labelDay, $errorTextDay);
  }

  if (!month) {
    showError($monthInput, $labelMonth, $errorTextMonth, messages[0]);
    hasError = true;
  } else if (month < 1 || month > 12) {
    showError($monthInput, $labelMonth, $errorTextMonth, messages[2]);
    hasError = true;
  } else {
    clearError($monthInput, $labelMonth, $errorTextMonth);
  }

  if (!year) {
    showError($yearInput, $labelYear, $errorTextYear, messages[0]);
    hasError = true;
  } else if (year > currentYear) {
    showError($yearInput, $labelYear, $errorTextYear, messages[3]);
    hasError = true;
  } else {
    clearError($yearInput, $labelYear, $errorTextYear);
  }

  if (hasError) {
    resetResults();
    return;
  }

  if (
    inputDate.getFullYear() !== year ||
    inputDate.getMonth() !== month - 1 ||
    inputDate.getDate() !== day
  ) {
    showError($dayInput, $labelDay, $errorTextDay, messages[4]);
    return;
  }

  let years = currentYear - year;
  let months = currentMonth - month;
  let days = currentDay - day;

  if (days < 0) {
    months--;
    const daysInPrevMonths = new Date(
      currentYear,
      currentMonth - 1,
      0
    ).getDate();
    days += daysInPrevMonths;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  showDate($calculateYears, years);
  showDate($calculateMonths, months);
  showDate($calculateDays, days);
});

function showError(input, label, errorText, message) {
  label.classList.add('text-red-400');
  input.classList.add('border-red-400', 'focus:border-red-400');
  errorText.textContent = message;
}

function clearError(input, label, errorText) {
  label.classList.remove('text-red-400');
  input.classList.remove('border-red-400', 'focus:border-red-400');
  errorText.textContent = '';
}

function showDate(calculateSpan, date) {
  calculateSpan.textContent = date;
}

function resetResults() {
  showDate($calculateDays, '--');
  showDate($calculateMonths, '--');
  showDate($calculateYears, '--');
}
