import readlineSync from 'readline-sync';

const runGameLogic = (getExpressionAndAnswer, rules) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  let i = 0;
  const questionCount = 3;
  while (i < questionCount) {
    const expressionAndAnswer = getExpressionAndAnswer();
    console.log(`Question: ${expressionAndAnswer.question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === expressionAndAnswer.trueAnswer) {
      i += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expressionAndAnswer.trueAnswer}'.\nLet's try again, ${userName}!`);
      process.exit();
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default runGameLogic;
