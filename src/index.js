module.exports = function toReadable (number) {
  const obj = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
  }

  number.toString().split('');
  for (let i = number.length; i > 0; i--) {
    for( let j = 0; j < 14; j++) {
      if(j == nunber[i]) {
        number[i] = obj['i']
      }
    }
  }
  return number;
}
