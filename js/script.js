const $dayInput = document.getElementById('day');
const $monthInput = document.getElementById('month');
const $yearInput = document.getElementById('year');
const $buttonDate = document.getElementById('convert-date');
const $labelDay = document.getElementById('label-day');
const $labelMonth = document.getElementById('label-month');
const $labelYear = document.getElementById('label-year');
const $errorText = document.getElementById('id="error-text"');

$buttonDate.addEventListener('click', () => {
  const day = Number($dayInput.value);
  const month = Number($monthInput.value);
  const year = Number($yearInput.value);

  if (!day || !month || !year) {
    emptyStyles();
  }
});

function emptyStyles() {
  $labelDay.classList.add('text-red-400');
  $labelMonth.classList.add('text-red-400');
  $labelYear.classList.add('text-red-400');

  $dayInput.classList.add('border-red-400', 'focus:border-red-400');
  $monthInput.classList.add('border-red-400', 'focus:border-red-400');
  $yearInput.classList.add('border-red-400', 'focus:border-red-400');
}
