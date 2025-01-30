import readlineSync from 'readline-sync';

const greetings = (condition) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(condition);
};

const generateNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const expression = () => {
  const num1 = generateNumber(1, 40);
  const num2 = generateNumber(1, 40);
  const operationsArr = ['+', '-', '*'];
  const operations = operationsArr[generateNumber(0, 2)];
  return `${num1} ${operations} ${num2}`;
};

const resultExpression = (str) => {
  const cat = str.split(' ');
  let result;
  if (cat.includes('+')) {
    result = Number(cat[0]) + Number(cat[2]);
  } else if (cat.includes('-')) {
    result = Number(cat[0]) - Number(cat[2]);
  } else if (cat.includes('*')) {
    result = Number(cat[0]) * Number(cat[2]);
  }
  return result;
};

const mostCommonDivisor = (str) => {
  const num = str.split(' ');
  let a = Number(num[0]);
  let b = Number(num[1]);
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const progressionArr = () => {
  const first = generateNumber(1, 10);
  const i = generateNumber(1, 10);
  const arr = [];
  arr.push(first);
  while (arr.length < 10) {
    const second = Number(arr.at(-1)) + i;
    arr.push(second);
  }

  return arr;
};
const hiddensqElement = (arr) => {
  const num = generateNumber(0, 9);
  const numTrue = arr[num];
  const arrNew = arr;
  arrNew[num] = '..';
  return [arrNew, [numTrue]];
};

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};

export {
  expression, resultExpression, generateNumber, mostCommonDivisor, progressionArr, hiddensqElement,
  greetings, isPrime,
};
