import logicGames from '../index.js';

const generateNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const create = () => {
  const expression = generateNumber(1, 100);
  const trueAnswer = isPrime(expression) ? 'yes' : 'no';
  return { question: expression, trueAnswer };
};
const primeGame = () => {
  logicGames(create, rules);
};
export default primeGame;
