import readlineSync from 'readline-sync';
import { generateNumber, mostCommonDivisor } from '../index.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');
  let i = 0;
  while (i < 3) {
    const num = `${generateNumber(1, 100)} ${generateNumber(1, 100)}`;
    const result = String(mostCommonDivisor(num));
    const qest = readlineSync.question(`Question: ${num}\nYour answer: `);
    if (qest === result) {
      i += 1;
      console.log('Correct!');
    } else {
      console.log(`'${qest}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`);
      process.exit();
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
