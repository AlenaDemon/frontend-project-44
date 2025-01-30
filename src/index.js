import readlineSync from 'readline-sync';

const logicGames = (create, rules) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  let i = 0;
  while (i < 3) {
    const result = create();
    console.log(`Question: ${result.question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === result.trueAnswer) {
      i += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result.trueAnswer}'.\nLet's try again, ${userName}!`);
      process.exit();
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default logicGames;
