import runGameLogic from '../index.js';
import getRandomNumber from '../random.js';

const calc = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Operator "${operator}" is not part of the program.`);
  }
};

const rules = 'What is the result of the expression?';
const getExpressionAndAnswer = () => {
  const firstNumber = getRandomNumber(40, 1);
  const secondNumber = getRandomNumber(40, 1);
  const operator = ['+', '-', '*'];
  const randomOperator = operator[getRandomNumber(operator.length - 1, 0)];
  const expression = `${firstNumber} ${randomOperator} ${secondNumber}`;
  const trueAnswer = String(calc(firstNumber, secondNumber, randomOperator));

  return { question: expression, trueAnswer };
};

const calcGame = () => {
  runGameLogic(getExpressionAndAnswer, rules);
};
export default calcGame;
