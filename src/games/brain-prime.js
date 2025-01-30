import readlineSync from 'readline-sync';
import { generateNumber, isPrime } from '../index.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let i = 0;
  while (i < 3) {
    const number = generateNumber(1, 100);
    const trueAnswer = isPrime(number) ? 'yes' : 'no';
    const qest = readlineSync.question(`Question: ${number}\nYour answer: `);
    if (qest === trueAnswer) {
      i += 1;
      console.log('Correct!');
    } else {
      console.log(`'${qest}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\nLet's try again, ${userName}!`);
      process.exit();
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
