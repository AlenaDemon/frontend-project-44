import readlineSync from 'readline-sync';

const runGameLogic = (getExpressionAndAnswer, rules) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  let i = 0;
  const questionCount = 3;
  while (i < questionCount) {
    const questionAndAnswer = getExpressionAndAnswer();
    console.log(`Question: ${questionAndAnswer.question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === questionAndAnswer.trueAnswer) {
      i += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${questionAndAnswer.trueAnswer}'.\nLet's try again, ${userName}!`);
      process.exit();
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default runGameLogic;
