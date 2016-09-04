const fs = require('fs');
const util = require('util');

process.stdin.setEncoding('utf8');

var content = '';
var balance = 0.0;
var updown = {'+': 0.0, '-': 0.0};

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    content += chunk;
  }
});

process.stdin.on('end', () => {
  const txs = JSON.parse(content);

  // console.error(`${txs.length} transactions`);

  console.log('!Type:Bank');

  txs.forEach(function (tx) {
    tx.Amount = tx.Amount.trim().replace(' ', '').replace(',', '');

    // console.error(tx.Amount);

    balance = balance + parseFloat(tx.Amount);
    updown[(/^-/.test(tx.Amount) ? '-' : '+')] += parseFloat(tx.Amount);

    var desc = '';
    if(tx['Foreign currency']) {
      desc = `Currency=${tx['Foreign currency']},ExchangeRate=${tx['Exchange rate']}`;
    }

    console.log(`D${tx['Voucher date']}`);
    console.log(`T${tx.Amount}`);
    if(desc) { console.log(`M${desc}`); }
    console.log(`P${tx['Reason for payment']}`);
    console.log('^');
  });

  // console.error(`balance: EUR ${balance.toFixed(2)}`);
  // console.error(`in: EUR ${updown['+'].toFixed(2)}`);
  // console.error(`out: EUR ${updown['-'].toFixed(2)}`);
  // console.error(`in + out: EUR ${(updown['+'] + updown['-']).toFixed(2)}`);
});
