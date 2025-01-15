"use strict";

const textBlock = document.getElementById('textBlock');
const colorButton = document.getElementById('colorButton');

let isColorChanged = false;
let originalColor = textBlock.style.color;

colorButton.addEventListener('click', () => {
  if (isColorChanged) {
    textBlock.style.color = originalColor;
  } else {
    originalColor = textBlock.style.color;
    textBlock.style.color = 'blue'; 
  }
  isColorChanged = !isColorChanged;
});
