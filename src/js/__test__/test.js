import Field from '../Board';

const cells = Array.from(document.querySelectorAll('.cell'));
const field = new Field(cells);

test('test class Field', () => {
  const result = field.setsRandomNumber();
  const result2 = field.setsRandomNumber();
  expect(result).not.toBe(result2);
});
