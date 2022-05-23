const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({ input, output });
const stream = fs.createWriteStream(path.join(__dirname, 'text.txt'));

rl.write('Приветствую, введите Ваш текст!\n');
rl.on('line', (input) => {
  if (input === 'exit') {
    process.exit();
  } else {
    stream.write(input + '\r\n');
  }
});
process.on('exit', () => {
  output.write('До встречи!');
  rl.close();
});



