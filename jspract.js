const x = "Hello world";
console.log(x);


let processed = 0;

function getAlco(year, money) {
  const getBeer = year >= 18;
  const enoughMoney = money >= 10;
  let readyForTrip = getBeer && enoughMoney;
  if (getBeer && enoughMoney === true) {
    return 'LET\'S GO!'
  } else {
    return 'YOUNG SHIT!'
  }
}
const year1 = 19;
const money1 = 20;

console.log(getAlco(year1, money1));

