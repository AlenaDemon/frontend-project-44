import runGameLogic from '../index.js';
import getRandomNumber from '../random.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const cheskEven = (num) => num % 2 === 0;
const getExpressionAndAnswer = () => {
  const expression = getRandomNumber(1, 40);
  const trueAnswer = cheskEven(expression) ? 'yes' : 'no';
  return { question: expression, trueAnswer };
};
const runGameEven = () => {
  runGameLogic(getExpressionAndAnswer, rules);
};
export default runGameEven;
