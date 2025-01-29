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

export {
  expression, resultExpression, generateNumber, mostCommonDivisor,
};
