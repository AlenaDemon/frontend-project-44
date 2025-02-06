/* eslint-disable max-len */
import runGameLogic from '../index.js';
import getRandomNumber from '../random.js';

const getProgressionArr = (firstNumber, count, length) => {
  const arr = [];
  arr.push(firstNumber);
  while (arr.length < length) {
    const second = Number(arr.at(-1)) + count;
    arr.push(second);
  }

  return arr;
};
const getArrWithHiddenElement = (arr) => {
  const arrLength = arr.length - 1;
  const num = getRandomNumber(0, arrLength);
  const numTrue = arr[num];
  const arrNew = arr.slice(0);
  arrNew[num] = '..';
  return [arrNew, [numTrue]];
};

const rules = 'What number is missing in the progression?';
const getExpressionAndAnswer = () => {
  const firstNumber = getRandomNumber(1, 10);
  const count = getRandomNumber(1, 10);
  const length = getRandomNumber(5, 10);
  const progressionArrAndTruNumber = getArrWithHiddenElement(getProgressionArr(firstNumber, count, length));
  const expression = progressionArrAndTruNumber[0].join(' ');
  const trueAnswer = String(progressionArrAndTruNumber[1]);
  return { question: expression, trueAnswer };
};
const runGameProgression = () => {
  runGameLogic(getExpressionAndAnswer, rules);
};
export default runGameProgression;
