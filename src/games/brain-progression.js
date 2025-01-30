import logicGames from '../index.js';

const generateNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const progressionArr = () => {
  const first = generateNumber(1, 10);
  const i = generateNumber(1, 10);
  const arr = [];
  arr.push(first);
  while (arr.length < 10) {
    const second = Number(arr.at(-1)) + i;
    arr.push(second);
  }

  return arr;
};
const hiddensqElement = (arr) => {
  const num = generateNumber(0, 9);
  const numTrue = arr[num];
  const arrNew = arr;
  arrNew[num] = '..';
  return [arrNew, [numTrue]];
};

const rules = 'What number is missing in the progression?';
const create = () => {
  const progressionArrAndTruNumber = hiddensqElement(progressionArr());
  const expression = progressionArrAndTruNumber[0];
  const trueAnswer = String(progressionArrAndTruNumber[1]);
  return { question: expression, trueAnswer };
};
const progressionGame = () => {
  logicGames(create, rules);
};
export default progressionGame;
