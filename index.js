const sum = (arr) => {
  return arr.reduce((acc, cur) => acc + cur, 0)
}

const mapToDuble = (arr) => {
  return arr.map(num => num * 2)
}

const sortBy = (arr) => {
 return arr.sort()
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function factorial(number) {
  if (number === 0) {
    return 1;
  }

  return number * factorial(number - 1);
}

function removeDuplicates(arr) {
  return arr.filter((value, index, self) => self.indexOf(value) === index);
}
function max(arr) {
  return Math.max(...arr);
}

function min(arr) {
  return Math.min(...arr);
}

function average(arr) {
  return sum(arr) / arr.length;
}
module.export = {
  sum, 
  mapToDuble,
  reverseString,
  isPrime,
  factorial,
  sortBy,
  removeDuplicates,
  max,
  min,
  average
}