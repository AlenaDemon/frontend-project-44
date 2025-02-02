import runGameLogic from '../index.js';
import getRandomNumber from '../random.js';

const progressionArr = () => {
  const first = getRandomNumber(1, 10);
  const i = getRandomNumber(1, 10);
  const arr = [];
  arr.push(first);
  while (arr.length < 10) {
    const second = Number(arr.at(-1)) + i;
    arr.push(second);
  }

  return arr;
};
const hiddensqElement = (arr) => {
  const num = getRandomNumber(9, 0);
  const numTrue = arr[num];
  const arrNew = arr;
  arrNew[num] = '..';
  return [arrNew, [numTrue]];
};

const rules = 'What number is missing in the progression?';
const getExpressionAndAnswer = () => {
  const progressionArrAndTruNumber = hiddensqElement(progressionArr());
  const expression = progressionArrAndTruNumber[0].join(' ');
  const trueAnswer = String(progressionArrAndTruNumber[1]);
  return { question: expression, trueAnswer };
};
const progressionGame = () => {
  runGameLogic(getExpressionAndAnswer, rules);
};
export default progressionGame;
