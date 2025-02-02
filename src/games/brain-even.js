import runGameLogic from '../index.js';
import getRandomNumber from '../random.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;
const getExpressionAndAnswer = () => {
  const expression = getRandomNumber(40, 1);
  const trueAnswer = isEven(expression) ? 'yes' : 'no';
  return { question: expression, trueAnswer };
};
const evenGame = () => {
  runGameLogic(getExpressionAndAnswer, rules);
};
export default evenGame;
