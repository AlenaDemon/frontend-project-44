import readlineSync from 'readline-sync';
import { hiddensqElement, progressionArr } from '../index.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');
  let i = 0;
  while (i < 3) {
    const progressionArrAndTruNumber = hiddensqElement(progressionArr());
    const progression = progressionArrAndTruNumber[0];
    const truNumber = String(progressionArrAndTruNumber[1]);
    const qest = readlineSync.question(`Question: ${progression}\nYour answer: `);
    if (qest === truNumber) {
      i += 1;
      console.log('Correct!');
    } else {
      console.log(`'${qest}' is wrong answer ;(. Correct answer was '${truNumber}'.\nLet's try again, ${userName}!`);
      process.exit();
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
