//DATA TYPES 
//typeof
const myName = "Demian";
const myAge = 22;
const isMarried = false;

console.log(myName, typeof myName);
console.log(myAge, typeof myAge);
console.log(isMarried, typeof isMarried);
console.log(10, typeof 10);
console.log(typeof (1 + 2));


//null vs undefined
const myName1 = "Demian";
let myAge1 = 22;
let wife = "Vlada";
const isMarried1 = wife !== null;

console.log(wife, typeof wife)

const result = 10 % 4;
console.log(result);


//NUMBERS
const a = 5;
const b = 6;
const result1 = (a - 1) * (b + 1);
console.log(result1);

//STRINGS
//strings basics
const myName2 = 'Demian';
let myAge2 = 24;

const message = myName2 + ' is ' + myAge2;
const message2 = `${myName2} 
  is 
    ${myAge2 + 1}`;

console.log(message);
console.log(message2);


//BOOLEAN
//boolean basics
const ageq = 25;
const hasAccess = ageq >= 18;

console.log(!hasAccess);

//logical AND
let cashInPocket = 50;
let ageq1 = 25;

const price = 40;
const ageLimit = 18

const hasEnoughMoney = cashInPocket >= price;
const isAdult = ageq1 > ageLimit;

const canBuy = hasEnoughMoney && isAdult;

console.log(canBuy);

//logical OR
let cashInPocket2 = 50;
let cardAmount = 20;
let price2 = 40;

const hasEnoughCash2 = cashInPocket2 >= price2;
const canPayWithCard = cardAmount >= price2;


const canBuy2 = hasEnoughCash2 || canPayWithCard;

console.log(canBuy2);


//FUNCTIONS
//Why we need functions
printRectInfo(5, 8);

function printRectInfo(a, b) {

    const perimeter = 2 * a + 2 * b;
    const square = a * b;

    console.log(`Rectangle ${a} x ${b}`);
    console.log(`Perimeter is ${perimeter}`);
    console.log(`Square is ${square}`);
    console.log('----------------------');
}

printRectInfo(3, 10);



//return and default params
function buildHouse(numberOfFloors, color = 'white') {
    const house = `${color} ${numberOfFloors}-floors house`;
    return house;
}

const smallHouse = buildHouse(2);
const bigHouse = buildHouse(9, 'red');

console.log(smallHouse);
console.log(bigHouse);


//CONDITIONS OPERATORS
//if else
const ageq3 = 15;

if (ageq3 >= 18) {
    console.log('Adult');
} else if (ageq3 >= 7) {
    console.log('Child');
} else if (ageq3 >= 3) {
    console.log('Toddler');
} else {
    console.log('Baby');
}


//if with return
function getTitle(ageq4) {
    if (ageq4 >= 18) {
        return 'Adult';
    }

    if (ageq4 >= 7) {
        return 'Child';
    }

    if (ageq4 >= 3) {
        return 'Toddler';
    }


    return 'Baby';
}

//WORKING WITH STRINGS
//Get string character

const titleq1 = 'Mate academy';

console.log(titleq1);
console.log(titleq1.length);

console.log(titleq1[2]);
console.log(titleq1[titleq1.length - 4]);
console.log(titleq1.at(1));
console.log(titleq1.at(-2));
//if index will be greater than length I will receive undefined (by at)

console.log(titleq1.charAt(2));
//if index will be greater than length I will receive empty (by using charAt) 
//Also charAt cannot work with negative numbers


//string modification methods
const titleq4 = '  Mate academy  ';

console.log(titleq4, titleq4.length);

//upper and lower case
console.log(
    titleq4.toUpperCase()
);

console.log(
    titleq4.toLowerCase()
);

console.log(titleq4, titleq4.length);


// trim
console.log(
    titleq4.trim(),
    //.trimLeft(), .trimRight()
    titleq4.trim().length
);

console.log(titleq4, titleq4.length);

//replace

console.log(
    titleq4.replace('a', '_'),
);
//in this case we replace just one letter 'a'

console.log(
    titleq4.replaceAll('a', '_')
);
//in this case we replace all 'a' letters
//this methods not changing main line(just create new one)

//how to find a substring
const textq1 = 'Mate academy';
const partq1 = 'MAte';

console.log(
    textq1.toLowerCase().includes(partq1.toLowerCase())
);

console.log(
    textq1.toLowerCase().startsWith('ma'),
    textq1.endsWith('emy')
);

console.log(
    textq1.indexOf('a'),
    textq1.indexOf('a', 2),
    textq1.indexOf('a', 6),
);

console.log(
    textq1.lastIndexOf('ac')
);


//how to slice a part of a string
const textq5 = 'Mate academy';

console.log(
    textq5.slice(4, -2)
);

//iterate string and count characters
const titleq7 = 'Mate academy';
let countq1 = 0;

// for (let i = 0; i < titleq7.length; i++) {
//     if (titleq7[i] === 'a') {
//         countq1++;
//     }
// }

for (let ch of titleq7) {
    if (ch === 'a') {
        countq1++;
    }
}

console.log(countq1);


//how to reverse a string
const titleq8 = 'Mate academy';
let reversed1 = '';

// for (let i = titleq8.length - 1; i >= 0; i--) {
//   reversed1 += titleq8[i];
// }

for (let ch of titleq8) {
    reversed1 = ch + reversed1;
}

console.log(reversed1);

//to strings 
const x = 12345;

console.log(x);

console.log(
    x.toString(),
    '' + x,
    `${x}`,
    String(x).length,
);


//ARRAY BASICS
//How to create array
const wordsq1 = ['one', 'two', 'three'];
const numbersq1 = [1, 3, 1, 5, 2, 1, 4];

console.log(wordsq1, numbersq1);
console.log([]);
console.log(['Misha', 38, true]); //tuple(different types of elements)

const userNameq1 = 'Misha';

console.log(
    userNameq1.split(''),
    [...userNameq1],
    Array.from(userNameq1),
);

for (let i = 0; i < wordsq1.length; i++) {
    console.log(wordsq1[i]);
}

for (let n of numbersq1) {
    console.log(n)
}

//How to modify an array

const numbersq2 = [0, 1, 2, 3, 4];

console.log(numbersq2);

numbersq2[numbersq2.length] = 99;
numbersq2[numbersq2.length] = 99;
numbersq2[numbersq2.length] = 99;
numbersq2.push(100, 101, 102); 
//add elements in the end of the line

numbersq2.unshift(23, 21, 12);
//add elements from start (shift for deleting same as pop)
const n1 = numbersq2.pop();

console.log(numbersq2);
console.log(n1)


//split, join and slice methods
const phrase = 'My name is sasha';
const wordsq9 = phrase.split(' ', 3);

console.log(wordsq9);
console.log(wordsq9.join('---'));

console.log(
    wordsq9.slice(1, -1)
);

//how to get arrays statistics
const resultq0 = getSum([2, 5, 13, 4, 5, 1, 6, 12, 9, 8]);

console.log(resultq0);

function getSum(numberss) {
    if (numberss.length === 0) {
        return 0;
    }

    let sum0 = 0;
    let min0 = numberss[0];

    for (const n of numberss) {
        if (n < min0) {
           min0 = n;
        }

        sum0 += n;
    }

    console.log(min0)

    return Math.floor(sum0 / numberss.length);
}


// function isJumping(number) {
//     const num = String(number);
  
//     for (let i = 1; i < num.length; i++) {
//       const difference = num[i] - num[i - 1];
//        if (Math.abs(difference) !== 1) {
//         return 'NOT JUMPING';
//       }
//     }
//     return 'JUMPING'
//   }
//Math.abs method