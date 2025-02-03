import runGameLogic from '../index.js';
import getRandomNumber from '../random.js';

const getMostCommonDivisor = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const rules = 'Find the greatest common divisor of given numbers.';

const getExpressionAndAnswer = () => {
  const num1 = getRandomNumber(100, 1);
  const num2 = getRandomNumber(100, 1);
  const expression = `${num1} ${num2}`;
  const trueAnswer = String(getMostCommonDivisor(num1, num2));
  return { question: expression, trueAnswer };
};
const gcdGame = () => {
  runGameLogic(getExpressionAndAnswer, rules);
};
export default gcdGame;
