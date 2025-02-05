import runGameLogic from '../index.js';
import getRandomNumber from '../random.js';

const checkPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getExpressionAndAnswer = () => {
  const expression = getRandomNumber(1, 100);
  const trueAnswer = checkPrime(expression) ? 'yes' : 'no';
  return { question: expression, trueAnswer };
};
const rumGamePrime = () => {
  runGameLogic(getExpressionAndAnswer, rules);
};
export default rumGamePrime;
