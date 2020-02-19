
exports.min = function min (array) {
  if(array === undefined || array.length === 0) return 0;
  array.sort(function (a, b) {return b - a});
  return array[array.length - 1];
}

exports.max = function max (array) {
  if(array === undefined || array.length === 0) return 0;
  let max;
  array.sort(function (a, b) {return b - a})
  for(let i = 0; i < array.length; i++) {
    max = array[0];
    if(max < array[i + 1]) {
    max === array[i + 1];   
    }
  }
    return max;
}

exports.avg = function avg (array) {
  if(array === undefined || array.length === 0) return 0;
  let sum = 0;
  let res;
  for(let i = 0; i < array.length; i++) {
    sum += array[i];
}
  return res = sum / array.length;
}
