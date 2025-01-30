import logicGames from '../index.js';

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

const generateNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const rules = 'Find the greatest common divisor of given numbers.';

const create = () => {
  const expression = `${generateNumber(1, 100)} ${generateNumber(1, 100)}`;
  const trueAnswer = String(mostCommonDivisor(expression));
  return { question: expression, trueAnswer };
};
const gcdGame = () => {
  logicGames(create, rules);
};
export default gcdGame;
