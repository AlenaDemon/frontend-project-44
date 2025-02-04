import runGameLogic from '../index.js';
import getRandomNumber from '../random.js';

const runCalc = (num1, num2, operator) => {
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
  const firstNumber = getRandomNumber(1, 40);
  const secondNumber = getRandomNumber(1, 40);
  const operator = ['+', '-', '*'];
  const randomOperator = operator[getRandomNumber(0, operator.length - 1)];
  const expression = `${firstNumber} ${randomOperator} ${secondNumber}`;
  const trueAnswer = String(runCalc(firstNumber, secondNumber, randomOperator));

  return { question: expression, trueAnswer };
};

const runGameCalc = () => {
  runGameLogic(getExpressionAndAnswer, rules);
};
export default runGameCalc;
