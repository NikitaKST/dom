import Field from './Board.js';

const cells = Array.from(document.querySelectorAll('.cell'));

const field = new Field(cells);

document.addEventListener('DOMContentLoaded', () => {
  const interval = setInterval(() => {
    field.deleteActiveClass();
    field.addActiveClass();
  }, 1000);
});
