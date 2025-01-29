import readlineSync from 'readline-sync';
import { expression, resultExpression } from '../index.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');
  let i = 0;
  while (i < 3) {
    const str = expression();
    const result = String(resultExpression(str));
    const qest = readlineSync.question(`Question: ${str}\nYour answer: `);
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
