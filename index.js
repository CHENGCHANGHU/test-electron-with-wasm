#!/usr/bin/env node
// console.log('process.argv: ', process.argv);
const child_process = require('child_process');

const subProcess1 = child_process.exec('pwd', (err, stdout) => {
  if (err) {
    console.log(err);
  }
  console.log(stdout);
  subProcess1.kill();
});

const subProcess2 = child_process.exec(`cd ${process.argv[1].split('bin')[0]} && cd ./lib/node_modules/test-electron-with-wasm && npm start`, (err, _) => {
  if (err) {
    console.log(err);
  }
  subProcess2.kill();
});