import readlineSync from 'readline-sync';
import { generateNumber } from '../index.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0;
  while (i < 3) {
    const number = generateNumber(1, 40);
    const trueAnswer = (number % 2 === 0) ? 'yes' : 'no';
    const qest = readlineSync.question(`Question: ${number}\nYour answer: `);
    if (qest === trueAnswer) {
      i += 1;
      console.log('Correct!');
    } else {
      console.log(`'${qest}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
      process.exit();
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
