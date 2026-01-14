# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1–31
  - The month number is not between 1–12
  - The year is in the future
  - The date is invalid (e.g. 31/04/1991)
- View the optimal layout depending on their device's screen size
- See hover and focus states for all interactive elements

### Screenshot

![](./preview.jpg)

### Links

- Solution URL: [Frontend Mentor solution](https://www.frontendmentor.io/)
- Live Site URL: [Live demo](https://juanfeoru.github.io/age-calculator-app/)

## My process

### Built with

- Semantic HTML5
- Tailwind CSS
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript (ES6+)
- JavaScript Date API

### What I learned

This project helped me reinforce how to work with dates in JavaScript without relying on external libraries.

Some key takeaways:

- How to validate real dates using the `Date` object to prevent impossible values (e.g. February 30)
- Handling edge cases when calculating differences between dates (negative days or months)
- Structuring form validation logic in a clear and maintainable way
- Dynamically updating the UI based on validation state

Example of date validation logic:

```js
const inputDate = new Date(year, month - 1, day);

if (
  inputDate.getFullYear() !== year ||
  inputDate.getMonth() !== month - 1 ||
  inputDate.getDate() !== day
) {
  // Invalid date
}
```

### Continued development

In future projects, I would like to:

- Improve accessibility by adding ARIA attributes for error messages and results
- Add subtle animations to the calculated values for a better user experience
- Continue refining form validation patterns and reusable utility functions

### Useful resources

MDN Web Docs - Date
– Essential for understanding how JavaScript handles dates

## Author

- Frontend Mentor - [@juafeoru](https://www.frontendmentor.io/profile/juanfeoru)
- Twitter - [@purpuraaaaaa](https://x.com/purpuraaaaaaa)
