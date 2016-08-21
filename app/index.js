const fs = require('fs');
const util = require('util');

process.stdin.setEncoding('utf8');

var content = '';
var balance = 0.00;
var updown = {'+': 0.00, '-': 0.00};

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    content += chunk;
  }
});

process.stdin.on('end', () => {
  const txs = JSON.parse(content);

  // console.error(`${txs.length} transactions`)
  console.log('!Type:Bank');

  txs.forEach(function (tx) {
    balance = balance + parseFloat(tx.Amount);
    updown[(/^-/.test(tx.Amount) ? '-' : '+')] += parseFloat(tx.Amount);

    const desc = /^-$/.test(tx.Description) ? false : tx.Description;

    console.log(`D${tx.Date}`);
    console.log(`T${tx.Amount}`);
    if(desc) { console.log(`M${desc}`); }
    console.log(`L${tx.Category}`);
    console.log(`P${tx.Counterparty}`);
    console.log('^');
  });

  // console.error(`balance: EUR ${balance.toFixed(2)}`);
  // console.error(`in: EUR ${updown['+'].toFixed(2)}`);
  // console.error(`out: EUR ${updown['-'].toFixed(2)}`);
  // console.error(`in + out: EUR ${(updown['+'] + updown['-']).toFixed(2)}`);
});
