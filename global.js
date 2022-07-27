// 1
// let hello = "Hello World From Node.js";
// let justNode = hello.slice(17);

// console.log(`Who let the ${justNode} out`);

// 2 require function
// const path = require("path");

// console.log(__dirname);
// console.log(`The file name is ${path.basename(__filename)}`);

// for (let key in global) {
//     console.log(key);
// }

// 3 argument variable with process.argv
// console.log(process.argv);

// function grab(flag) {
//     let indexAfterFlag = process.argv.indexOf(flag) + 1; // value come after flag
//     return process.argv[indexAfterFlag];
// }

// let greeting = grab('--greeting');
// let user = grab('--user');

// console.log(greeting);
// console.log(user);

// 4 standard input and output
// process.stdout.write("Hello");

// const question = [
//     'What is your name?',
//     'What are you doing?',
//     'How old are you?'
// ];

// const answer = [];

// function ask(i = 0) {
//     process.stdout.write(`\n${question[i]}`);
//     process.stdout.write(` > `)
// }

// ask();

// process.stdin.on("data", function (data) {
//     answer.push(data.toString().trim());
//     if (answer.length < question.length) {
//         ask(answer.length);
//     } else {
//         process.exit();
//     }
// }); // after ask() call wait until data event occured and proceede as descripbe in function

// process.on('exit', function () {
//     process.stdout.write('\n');
//     process.stdout.write(`Go ${answer[1]} ${answer[0]}, ${answer[2]}`);
// });

// 5 time and interval
// const waitTime = 3000;

// console.log(`Setting wait time ${waitTime / 1000} second delay`);

// const timerFinished = () => {
//     clearInterval(interval)
//     process.stdout.clearLine();
//     console.log('\ndone');
// }

// setTimeout(timerFinished, waitTime);

// const waitInterval = 500;
// let currentTime = 0;

// const incTime = () => {
//     currentTime += waitInterval;
//     const p = Math.floor((currentTime / waitTime) * 100);
//     process.stdout.clearLine();
//     process.stdout.cursorTo(0);
//     process.stdout.write(`waiting... ${p}`)
// };

// const interval = setInterval(incTime, waitInterval);
