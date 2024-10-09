'use strict';

let age = 20;

console.log(20)

const text1 = 'Hi guys! My name is Misha. I am your coach';
const text2 = `
Hi guys!
My name is Misha.
I am your coach
`;

console.log(text2)


let myFirstValue = 'myfirstcalue';
const mySecondValue = myFirstValue + 'mysecondvalue';
const myThirdValue = myFirstValue + mySecondValue + 'mythirdvalue';

console.log(myFirstValue, mySecondValue, myThirdValue);


const age1 = 25;

if (age1 < 18) {
    console.log('Child');
    console.log('Child');
}




const age3 = 3;
let message2 = '';

if (age < 7) {
    message2 = 'Baby';
} else if (age < 18) {
    message2 = 'Child';
} else {
    message2 = 'Adult';
}

console.log(message2);  





const message = (age < 7)
 ? 'Baby'
 : (age < 18)
  ? 'Child'
  : 'Adult';

console.log(message);





function increase(x) {
    x++;
    return x;
}

const y = increase(2);

console.log(y);


// WORKING WITH NUMBERS

const decimal = 111;

// 327 = 3 * 100 + 2 * 10 + 7 * 1 

const binary = 0b111;
// 111 = 1 * 4 + 1 * 2 + 1 * 1
// 1 * на 2 в другому степені = 4
// 1 * на 1 в другому степені = 2
// 1 * на 0 в другому степені = 1

// 0b101010 = 0 * 1 + 1 * 2 + 0 * 4 + 1 * 8 + 0 * 16 + 1 * 32 = 42
// 0 * на двійку в нульовому степені = 0
// 1 * на двійку в першому ступені = 2 
// 0 * на два в другому степені = 0
// 1 * на два в третьому степені = 8
// 0 * на два в четвертому степені = 0
// 1 * на два в п'ятому степені = 32

   
const hex = 0x111;
// 111 = 1 * 256 + 1 * 16 + 1 * 1
// одиниця * 16 в другому степені = 256
// одиниця * 16 в першому степені = 16
// одиниця * 16 в нульовому степені = 1 

// 0x2A = 16 чисел, після 9 записуються = ABCDEF
// 0x2A = 2 * 16 + 10 * 1 = 42
// 2 * на 16 в першому ступені = 32
// 10 * на 16 в нульовому ступені = 10

console.log(`decimal 111 = ${decimal.toString(10)}`);
console.log(`binary 111 = ${binary.toString(2)}`)
console.log(`hex 111 = ${hex.toString(16)}`)
 

// OPERATOR PRECEDENCE

'use strict';

const x = 10 % (2 ** 3);

console.log(x);

// BIG NUMBERS

'use strict'

let x1 = Infinity;

console.log(1e100 < x1);
console.log(Number.MAX_VALUE * 2);
console.log(Number.MAX_SAFE_INTEGER);
console.log(typeof 1243567890890n); //bigint
console.log(isFinite(x1));


// 0 / 0 = NaN
// 10 / 0 = Infinity
// Infinity * 0 = NaN(Not a nummber)



// CONVERT STRING TO A NUMBER

'use strict'
 
// const value = '  123.4f ';
const value = false;

console.log(
    Number(value),
    0 + (+value),
    +value,
    parseInt(value, 10),

    // ЯКЩО ПОТРІБНА ДРОБОВА ЧАСТИНА
    parseFloat(value)

);



// NUMBER ROUNDING 

'use strict';

let x2 = 12.345;

console.log(x2);

console.log(`Math floor(${x2}) = `, Math.floor(x2), `closest <= y1`)
console.log(`Math ceil(${x2}) = `, Math.ceil(x2), `closest >= y1`)
console.log(`Math trunc(${x2}) = `, Math.trunc(x2), `without decimal part`)
console.log(`Math round(${x2}) = `, Math.round(x2 * 100) / 100, `down < 0.5, up >= 0.5`)
console.log(`y1.toFixed(0)        =`, +x2.toFixed(2));



// RANDOM NUMBERS

'use strict';

for (let i = 0; i < 10; i++) {
    const x3 = getRandomNumber(2, 7);

    console.log(x3);
}

function getRandomNumber(min, max) {
    return Math.floor(
        min + Math.random() * (max + 1 - min)
        // [min; min + (max - min)) від нуля до 1 не включно
    );
}

// LOOP IN DETAILS

'use strict';

// debugger;

let i = 0;
let j = 1;

for (;;) {
    if (i >= 3) {
        break;
    }
    console.log(i, j);

  i++;
  j--;
}




let i1 = 0;
let j1 = 1;

for (;;) {
    if (!(i1 < 3)) {
        break;
    }
    console.log(i1, j1);

  i1++;
  j1--;
}




for (let k = 0; k < 10; k++) {
    if (k % 2 === 0) {
        continue;
    }
    console.log(k);
}



// CALCULATION IN A LOOP

const SECONDS_IN_DAY = 24 + 60 * 60;
const iterationCount = 1e1 - 1

for (let daysAgo = 0; daysAgo < iterationCount; daysAgo++) {
    const secondsAgo = daysAgo * SECONDS_IN_DAY

    console.log(secondsAgo);
}


// WHILE AND DO WHILE

let nm = 256;
let count = 0;

while (Number.isInteger(nm)) {
    nm /= 2;

    if (!Number.isInteger(nm)) {
        break;
    }


    count ++;
}

console.log(count);





let nm1 = 264;
let count1 = 0;

while (true) {
    nm1 /= 2;

    if (!Number.isInteger(nm1)) {
        break;
    }


    count1++;
}

console.log(count1);

 

// WORKING WITH STRINGS
// STRING ENCODING



'use strict';

const message12 = '\\ \`He\tllo \nWorld! \x65 \xA9 \u23F3 \u23F4 \u{1F514}';

console.log(message12);

let str = '';

for (let i = 1; i < 256; i++) {
    str += String.fromCodePoint(i);
}

console.log(str);

//COMPARING STRINGS

const name1 = 'Hedgehog';
const name2 = 'apple';

console.log(
    name1.toLowerCase() > name2.toLowerCase()
);

const word1 = 'їжачок';
const word2 = 'яблуко';

console.log(
    word1.localeCompare(word2) > 0
);


// REPEAT, PADSTART AND PADEND


'use strict';

console.log(
    '0123 '.repeat(4), // '0123 0123 0123 0123 '
);
console.log(
    '0123'.padStart(19, '**** '), // '**** **** **** 0123'
);
console.log(
    '0123'.padEnd(19, ' ****') // '0123 **** **** ****'
)

const myString = 'Hello, world! \nIt \'s JavaScript!';
console.log(myString)


//JAVASCRIPT BASIC EXTENDED
// REST ARGUMENTS

'use strict';

function sum(a, b =   0, ...args) {
    console.log(a, b, args.length );
}

sum(1, 2)
sum(1, 2, 3, 4)
sum();

// FUNCTION DECLARATION, EXPRESSION AND ARROW

'use strict';

function sum(a = 0, b = 0, ...args) {
    console.log(args);

    return a + b;
}

console.log(
    sum(1, 2),
    sum(1, 2, 3, 4),
    sum(),
);

function sum(a = 0, b = 0, ...args) {
    console.log(args);

    return a + b;
}

let operation = function(a = 0, b = 0, args) {
    console.log(args);

    return a + b;
};
let operation2 = (a = 0, b = 0, ...args) => {
    console.log(args);

    return a + b;
};

let operation3 = (a = 0, b = 0, ...args) => a + b;
let operation4 = a => a + 10;

console.log(
    operation(1, 2),
    operation2(1, 2),
    operation3(1, 2),
    operation4(1, 2),
);


//SWITCH 
//SWITCH CASE

'use strict';

const count4 = 2;

if(count4 === 1) {
    console.log('One');
} else if (count4 === 2) {
    console.log('Two');
} else {
    console.log('Many');
}

switch (count4) {
    case 1: 
        console.log('One');
        break;

    case 2:
        console.log('Two');
        break;

    default:
        console.log('Many');
}



function getName(count4) {
    switch (count4) {
        case 1: 
            console.log('One');
            break;
    
        case 2:
            console.log('Two');
            break;
    
        default:
            console.log('Many');
    }
}


//SWITCH TRUE

console.log(
    getName(4),
);

function getName(count6) {
    // if (count6 < 6) {
    //     return 'One';
    // }

    // if (count6 <= 4) {
    //     return 'A few';
    // }

    // return 'Many'




    switch (true) {
        case count6 < 2:
          return 'One'

        case count6 <= 4:
          return 'A few'

        default: 
          return 'Many';
    }
}

// AUTOFORMAT ALT+SHIFT+F


//TYPE CONVERSION
//EXPLICIT TYPE CASTING  

'use strict';

const value3 = 10;

// false, '', 0, NaN, 0n, null, undefined
// [], () => {}, {}
if (value3) {
    console.log(
       Boolean(value3), !!value3
    );
}


const value4 = '12';


    console.log(
        Boolean(value4), !!value4,
        String(value4), `${value4}`, '' + value4,
        Number(value4), (+value) + 0, +value
    );


// HOW TO COMPARE VALUE

'use strict';

const value2 = 2;

// console.log(
//     (+value2) > 18,
//     String(value2) > '18'
// );


console.log(
    value2 == 2,
    (+value2) === 2,
);

console.log(
    +true,
    +false,
    +'',
    +'0',
    +null,
    +undefined,
);

console.log(
 0 !== null,
 'null' === null,
 null === undefined,
);

console.log(
 NaN === NaN,
 isNaN('NaN'),
 Object.is(NaN, NaN)
)

// Якщо рядок містить число та ще якісь символи, 
// можна використати функції parseInt та parseFloat
// console.log(parseInt('100r')); // 100



// LOGICAL OPERATORS 
// HOW LOGICAL OPERATORS WORK

'use strict'

console.log(
    true || true,
    true || false,
    false || true,
    false || false, //false
);



function or(a, b) {
if (a) {
    return true
 } 

 if (b) {
    return true
 }

 return false;
}




console.log(
    or(true, false),
    or(true, false),
    or(false, true),
    or(false, false), //false 
);
 
// operator || first не порожнє значення
// operatot && first порожнє значення

console.log(
    0 || null || 12 || false
);




// OBJECTS
// WHE WE NEED OBJECTS

'use strict'

const firstName1 = 'Demian';
const lastName1 = 'Xolot';
const age11 = 22;

const firstName2 = 'Kevin';
const lastName2 = 'Molot';
const age22 = 29;

printInfo(firstName1, lastName1, age11);
printInfo(firstName2, lastName2, age22);

function printInfo(firstName, lastName, age) {
    console.log(`User ${firstName} ${lastName} is ${age}`);
}



const user1 = {
    firstName: 'Demian',
    lastName: 'Xolot',
    age: 23,
};

const user2 = {
    firstName: 'John',
    lastName: 'Molot',
    age: 29,
};

printUserInfo(user1);
printUserInfo(user2);

function printUserInfo(user) {
    console.log(`User ${user.firstName} ${user.lastName} is ${user.age}`);
}

//CREATE, READ, UPDATE AND DELETE PROPERTIES

'use strict';

const age9 = 39;

const user = {
    'first @@#Name': 'Misha',
    'lastName': 'Alexev',
    fullName: 'Misha Alexev',
    ['a' + 'g' + 'e' + '9']: 39,
    1: 123,

    age9: age9,
    age9,
};

console.log(
    user.fullName,
    user.lastName,
    user['first' + ' @@#Name'],
    user['age9'],
);

user.age9 = 40;
user['age9'] = 41;

// delete user.age9;
// delete user['age9'];

console.log(user);




//CHECK OBJECT PROPERTY

'use strict';

const user0 = {
    firstName: 'Oleg',
    age19: 23,
    isMarried: true,
};

const key = 'firstName';

if (user0.firstName) {
    console.log('Property exists');
}

// if (user0[key] !== undefined) {
//     console.log('Property exists');
// }

if ('isMarried' in user0) {
    console.log('Property exists');
}

if (key in user0) {
    console.log('Property exists');
}

// if (Object.hasOws(user0, 'age')) {
//     console.log('Property exists');
// }



//OBJECTS ITERATION

'use strict';

const user56 = {
    firstName56: 'Oleg',
    age56: 39,
    isMarried56: true,
    // 2: 'qwe',
    // 0: 12,
};

user56.x = 10;

for (const key56 in user56) {
    console.log(key56, user56[key56]);
}

console.log(Object.keys(user56));

for (const key56 of Object.keys(user56)) {
    console.log(key56, user56[key56]);
} 
// Масив з усіма ключами



for (const valueee of Object.values(user56)) {
    console.log(valueee);
}
// Масив з усіма значеннями



for (const entry of Object.entries(user56)) {
    console.log(entry[0], entry[1]);
}
// масив з ключем та значенням



// function restoreNames(users) {
//     for (const user of users) {
//         if (user.firstName) {
//             continue;
//         }

//         const part = user.fullName.split(' ');
//         user.firstName = part(0)
//     }
// }





// function removeFemaleAges(people) {
//     for (let person of people) {
//         if (person.gender === 'female') {
//             delete person.age;
//         }
//     }
// }


//code camp
const x22 = [["hello"], ['hi'], [24], [true]];
const unshifttry = x22.shift()
const numX = 5;
x22.unshift(numX);
console.log(x22);

const arr = [
    [1, 2], [3, 4], [5, 6]
  ];
 
  debugger; 

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }
  }


  
  function getAlco(year = 20, money = 15) {
    const getBeer = year >= 18;
    const enoughMoney = money >= 10;
    let readyForTrip = getBeer && enoughMoney;
    if (getBeer && enoughMoney === true) {
      return 'LET\'S GO!'
    }
  }
  console.log(getAlco());