const elements = [
  [9, 'some'],
  [7, 'some'],
  [3, 'some'],
  [2, 'some'],
  [1, '7'],
  [2, 'some'],
  [1, '5'],
  [2, 'some'],
  [1, '2'],
  [2, 'some'],
  [1, '1'],
  [3, 'some'],
  [1, '0'],
  [9, 'some'],
  [100, 'some'],
];

type Some = [number, string];

elements.sort((a: Some, b: Some) => {
  return a[0] - b[0];
});

console.log(elements);
