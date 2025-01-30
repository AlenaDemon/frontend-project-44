import logicGames from '../index.js';

const generateNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const create = () => {
  const expression = generateNumber(1, 40);
  const trueAnswer = (expression % 2 === 0) ? 'yes' : 'no';
  return { question: expression, trueAnswer };
};
const evenGame = () => {
  logicGames(create, rules);
};
export default evenGame;
