function minmax(array) {
  let avr = array.reduce((a, b) => a + b, 0) / array.length;
  let max = Math.max(...array);
  let min = Math.min(...array);
  let len = array.length;

  return { average: avr, maximum: max, minimum: min, length: len };
}
module.exports = minmax;
