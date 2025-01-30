import logicGames from '../index.js';

const generateNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const expressionGet = () => {
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

const rules = 'What is the result of the expression?';
const create = () => {
  const expression = expressionGet();
  const trueAnswer = String(resultExpression(expression));
  return { question: expression, trueAnswer };
};

const calcGame = () => {
  logicGames(create, rules);
};
export default calcGame;
