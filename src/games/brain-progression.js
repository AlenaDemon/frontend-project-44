import runGameLogic from '../index.js';
import getRandomNumber from '../random.js';

const getProgressionArr = (firstNumber, count) => {
  const arr = [];
  arr.push(firstNumber);
  while (arr.length < 10) {
    const second = Number(arr.at(-1)) + count;
    arr.push(second);
  }

  return arr;
};
const hiddensqElement = (arr) => {
  const num = getRandomNumber(0, 9);
  const numTrue = arr[num];
  const arrNew = arr.slice(0);
  arrNew[num] = '..';
  return [arrNew, [numTrue]];
};

const rules = 'What number is missing in the progression?';
const getExpressionAndAnswer = () => {
  const firstNumber = getRandomNumber(1, 10);
  const count = getRandomNumber(1, 10);
  const progressionArrAndTruNumber = hiddensqElement(getProgressionArr(firstNumber, count));
  const expression = progressionArrAndTruNumber[0].join(' ');
  const trueAnswer = String(progressionArrAndTruNumber[1]);
  return { question: expression, trueAnswer };
};
const progressionGame = () => {
  runGameLogic(getExpressionAndAnswer, rules);
};
export default progressionGame;
