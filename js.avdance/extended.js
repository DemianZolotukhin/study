//This is my first code!
console.log('Hello World');

let name = 'Mosh'; // String Literal
console.log(name);

// Cannot be a reserved keyword
// Should be meaninful
// Cannot start with number (1name)
// Cannot contain a space or hyphen (-)
// Are case-sensitive

let firstName = 'Mash';
let lastName = 'Hamedani';

const interestRate = 0.3;
console.log(interestRate);

let age = 30; // Number Literal
let isApproveed = true; //Bolean Literal
let secondName;
let selectedColor = null;

let person = {
    namas: 'Morti',
    years: 25
};


// Dot Notation
person.name = 'John';

// Bracket Notation
person['name'] = 'Marry';

console.log(person.name);

for (let i = 7; i >= 4; i--) {

}

const num = 4;
console.log(num + 5);

//Коли в нас є умова і два значення, ми можемо використовувати тернарні оператори : ?, 
//або якщо я не вибираю значення, а виконую команди, або якщо значень більше ніж одне, я буду використовувати if, else.(Або switch case)


 'use strict';
 
 let age6 = 0;

 age6++; // 0
 ++age6; // 2

 console.log(age);


 function increase(x) {
    x++;
    return x;
 }

 const y = increase(2);

 console.log(y);



// піднесення в степінь має більший пріорітет ніж ділення з остачею

'use strict';

const x = 10 % 2 ** 3;
console.log(x);


// Коли ми скінченне ділимо на нескінченне, то отримуємо infinity, а якщо помножити нескінченність на нуль ми отримаємо NaN



// робота з числами
'use strict';

const value = '   123.4f \n \t ';
console.log(
  // Number(value),
  +value,
  parseInt(value),//прочитати число з частини рядка(ціле число, яке можна було прочитати відкинувши пробіли до першого рядка)
  parseFloat(value)//якщо потрібно зберегти дробову частку
);

'use strict'

let xz = 12.345;

console.log(xz);

console.log(`Math.floor(${xz}) = `, Math.floor(xz), 'closest <= xz');
console.log(`Math.ceil(${xz}) = `, Math.ceil(xz), 'closest >= xz');
console.log(`Math.trunc(${xz}) = `, Math.trunc(xz), 'without decimal part');
console.log(`Math.round(${xz}) = `, Math.round(xz * 100) / 100, 'down < 0.5, up >= 0.5'); // вираз (xz * 100) / 100 дозволяє нам додати знаки після крапки 

console.log(`xz.toFixed(0) = `, xz.toFixed(0)); // перетворення числа на рядок(схоже на раунд, але ми можемо прописати к-сть знаків після коми)
//щоб отримати число з одним значенням після крапки, можна перетворити стрінг в нам за допомогою +


const resultArray = getSum([2, 5, 13, 4, 5, 1, 6, 12, 9, 8]);

console.log(resultArray);

function getSum(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  let sum = 0;
  let min = numbers[0];

  for (const n of numbers) {
    if(min > n) {
      min = n;
    }
    sum += n;
  }

  return Math.trunc(sum / numbers.length)
}

'use strict';

let res13 = 373 % 2;
console.log(res13)


'use strict';

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;
  }

  console.log(i);
}


'use strict' 

let i = 0;
for (;;) {
  if (i > 3) {
    break;
  }
  
  console.log(i)

  i++;
}
  
console.log(i) 
//В цьому випадку і буде доступне поза циклом
//Після останнього консоль логу і ще раз збільшилася


'use strict'
const SECONDS_IN_DAY = 24 * 60 * 60;

for (let daysAgo = 0; daysAgo < 1e1; daysAgo++) {
  const secondsAgo = daysAgo * SECONDS_IN_DAY;

  console.log(secondsAgo);
}

//Потрібно уникати лишніх обчислень в середині циклу

'use strict';

let n = 256.4;

let count = 0;
while (true) {
  n /= 2;

  if (!Number.isInteger(n)) {
    break;
  }

  count++
}
 
console.log(count);

// Коли в нас є тільки умова і ми не знаємо к-сть ітерацій, ми використовуємо цикл while

// IF виконує умову один раз, а while допоки умова залишається вірною

do {
  n /= 2;
  count++;
} while (Number.isInteger(n))

//В випадку з do while перша ітерація відбудеться в будь-якому випадку

const n1 = 4;
let sum = 0;

for (i = 0; i <= n1; i++) {
  sum += i;
}

console.log(sum)


const title = 'Mate academy';
console.log(title[title.length - 4]);
console.log(title.at(-2))
//Два варіанти запису, то що знизу коротший

console.log(title.charAt(-2));
//Якщо потрібно отримати порожній рядок замість undefined(якщо індекс більший ніж символів в рядку)

'use strict';

const message = '\\ \'He\tllo \nworld! 🔔\xA9 \u23F3 \u{1F514}';
// \n - перенос рядка
// \t - довгий пробіл

console.log(message);
//Щоб дізнатися код символа використовуємо console.log(message.codePointAt(1));
//Ми можемо вставляти символи в код за допомогою їх 16-ткового коду

let str = '';

for(let i = 1; i < 256; i++) {
  str += String.fromCodePoint(i);
}

console.log(str);

'use strict';

const name12 = 'Hedgehog';
const name22 = 'apple';

console.log(
  name12.toLowerCase() > name22.toLowerCase()
);

const word1 = 'їжачок';
const word2 = 'яблуко';

console.log(
  word1.localeCompare(word2)
);

// localCompare метод, який порівнює з урахуванням всіх особливостей мови
// 1 якщо перше слово в словнику стоїть після, 0 якщо слова однакові і -1 якщо слово в словнику стоїть перед
// В нашому прикладі зверху word1 стоїть перед word2, бо ми отрималь -1 в консоль

// '0123 '.repeat(4), '0123 0123 0123 0123'
// '0123 '.padStart(18, '**** '), '**** **** **** 0123'
// '0123 '.padEnd(19, ' ****'), '0123 **** **** ****'

const x4 = 12345;

console.log(x4);

console.log(
  x4.toString(),
  '' + x4,
  `${x4}`,
  String(x4),
);

//.trimLeft(), .trimRight(), обрізає пробіли по краям

//.toUpperCase() and .toLowerCase() 

//.replace('a', '_') один символ а, replaceAll('a', '_') всі символи а
// Важливо пам'ятати, що жодні методи не змінюють рядок, а всі методи створюють новий рядок

const text = 'Mate academy';
const part = 'mAte';

console.log(
  text.toLowerCase().includes(part.toLowerCase())
);
// Регістер має значення

// Щоб дізнатися де саме знаходиться наша частка, можемо використати(теж залежна від регістру)
// Ми шукаємо початок всього рядка, тобто частка 'ас' не підійде

console.log(
  text.startsWith('a')
);

// Якщо я хочу знайти чим завершується мій рядок
console.log(
  text.endsWith('emy')
);

// Існує метод для пошуку точного співпадінн
// В цьому прикладі ми шукаємо індекс 'а' починаючи з другого індексая
 console.log(
  text.indexOf('a', 2)
 );

// Існує метод який дозволяє шукати з кінця
// Теж залежить від регістру

console.log(
  text.lastIndexOf('ac')
);

// Метод .slice працює з від'ємними індексами, в нашому прикладі ми отримуємо
// текст від другого індекса до останнього (мінус два)

console.log (
  text.slice(2, -2)
);

//parseInt() - це функція в JavaScript, яка призначена для перетворення рядка у ціле число. Вона приймає два аргументи: рядок, який потрібно перетворити, і, необов'язково, основу системи числення (за замовчуванням вважається десяткова система).
//parseFloat() - використовується для перетворення рядка у число з плаваючою комою.

//Extended Extra
function getArrayProduct(numbersr) {
  let totalProduct = 1;

  // debugger;

  for (const n of numbersr) {
    totalProduct *= n; 
  }

  const result = [];

  for (const n of numbersr) {
    result.push(totalProduct / n); 
  }

  return result;
}

console.log(getArrayProduct([5, 3, 7, 4, 5, 6]));

'use strict';

function sume(a, ...args) { //перші аргументи підуть в змінну а, остальні в ...args
  console.log(args.length);
}

sume(1, 2)
sume(1, 2, 3, 4)
sume(undefined);

// Зазвичай опціональні або не обов'язкові параметри ставлять в кінці
// Щоб передати додаткові значення (sum(1, 2, 3, 4)) використовуємо рест оператор ...
// аргументи передані після другого будуть зберігатися в масиві
// також ми можемо зберігати всі аргументи до одного масиву
// undefined теж зберігається 

'use strict';

console.log(
  sum0(1, 2),
  sum0(1, 2, 3, 4),
  sum0(),
  );

  function sum0(a = 0, b = 0, ...args) {
    console.log(args);

    return a + b;
  } // ця функція зможе працювати якщо її викликати вище коду

  let operation = function(a = 0, b = 0, ...args) {
    console.log(args);

    return a + b;
  };
   // ці ж функції будуть працювати тільки ніжче по коду(після присвоєння)   
  let operation2 = (a = 0, b = 0, ...args) => {
    console.log(args);

    return a + b;
  };
   // ці ж функції будуть працювати тільки ніжче по коду(після присвоєння)                
  let operation3 = (a = 0, b = 0, ...args) => a + b;
  let operation4 = a => a + 10;
   // ці ж функції будуть працювати тільки ніжче по коду(після присвоєння)  
  console.log(
    operation(1, 2),
    operation2(1, 2),
    operation3(1, 2),
    operation4(1, 2),
  );

// 'use strict'

// function getName(count) {
//   switch(count) {
//   case 1:
//     return 'One';

//   case 2: 
//     return 'Two';

//   case 3:
//     return 'Three';
//   }
// }

// Якщо в нас немає додаткови перевірок і ми просто перебираємо значення краще використовувати switch case
// Це спрощує код

// function getName(count) {
//   switch(true) {
//     case count < 2:
//       return 'One';

//     case count <= 4:
//       return 'A few';

//     default:
//       return 'Many';
//   }
// }

// Якщо умови не перебір значень, то краще використовувати if else

'use strict';

const value5 = 10;

//Значення, які перетворються на false: false, '', 0, NaN, 0n, null, undefined
//Значення, які перетворються на treu(всі остальні, що не перетворюються на false): [], () => {}, {}
//Boolean() перетворює значення на булев тип, або !!value

if(value5) {
  console.log(
    Boolean(value5), !!value5,
    String(value5), `${value5}`, '' + value5, //В середині інтерполяції `` значення автоматично перетворюється на рядок
    Number(value5), value5 - 0, +value5 // В математичних операціях відбувається автоматичне перетворення на число 
  );
}

'use strict';

const value6 = '2';

console.log(
  value6 > 18,
  value6 > '18' // Якщо ми порівнюємо два рядки, то вони порівнються посимвольно, оскільки перший '2' символ має більший код ні '18'
);
// Якщо в нас два рядки, то ми порівнюємо їх посимвольно, в інших випадках ми приводимо до чисел

console.log(
  NaN === NaN, // NaN це єдине значення в js, яке не дорівнює собі
  isNaN(NaN),
  Object.is(NaN, NaN) // Якщо потрібно гарантовано перевірити чи два значення рівні між собою, з урахуванням значенням NaN. В інших випадках можна використовувати === строге порівняння 
)

function getGuestsCount(guestsInput) {
  const guestsNumber = parseInt(guestsInput);

  return isNaN(guestsNumber)
    ? 'not a number'
    : guestsNumber;
}
// У цьому прикладі ми в константу передаємо значення з використанням методу
// parseInt, якщо перше елемент з значення guestInput буде рядком parseInt
// перетворить його у NaN, якщо цифрою, то ми збережемо ціле перше число
// а потім за допомогою isNaN ми задаємо умову, якщо цей вираз true(тобто число NaN)
// повертаємо рядок not a number, в іншому випадку константу

// isNaN('Hello'); // поверне true, оскільки 'Hello' не можна конвертувати в число
// isNaN(42); //  false, оскільки 42 - це числоповерне



// оператор or || повертає перше не порожнє значення
// оператор and && повертає перше порожнє значення
// в цих операторів різний пріорітет, оператор and && виконується першим

console.log(
  0 || null || 12 || false,

  0 || (null && 12) || false, 
  0 || (null) || false, // В цьому випадку повернеться останнє значення (false)
); // тому, що серед них немає жодного не порожнього

const nameme = '' || 'No name';
//Якщо користувач введе щось, то ми це використаємо, якщо ні тоді виведеть 'No name'


function canTheyBook(adultsCount = 0, childrenCount = 0) {
  // debugger;

  const hasSpace = adultsCount + childrenCount <= 8;
  const oneAdult = adultsCount > 0;
  const childPerAdult = childrenCount <= 2 * adultsCount;

  return hasSpace && oneAdult && childPerAdult;
}

console.log(canTheyBook(3, 5));

// function joinWords(words, glue) {
//   return words.join(glue);
// }


`use strict`;

const firstName11 = 'Misha';
const lastName11 = 'Zolotukhin';
const age11 = '25';

const firstName22 = 'Oleg';
const lastName22 = 'Hodunko';
const age22 = '55';

printInfo(firstName11, lastName11, age11);
printInfo(firstName22, lastName22, age22);

function printInfo(firstName, lastName, age) {
  console.log(`User ${firstName} ${lastName} ${age}`);
}

const user1 = {
  firstName: 'Misha',
  lastName: 'Zolotukhin',
  age: 39,
};

const user2 = {
  firstName: 'Oleg',
  lastName: 'Zaraz',
  age: 55,
};

printUserInfo(user1);
printUserInfo(user2);

function printUserInfo(user) {
  console.log(`User ${user.firstName} ${user.lastName} is ${user.age}`);
}

'use strict';

const age3 = 39;

const user3 = {
  'first $$&name': 'Misha',
  'lastName': 'Hrynko',
  fullName: 'Mish Hrynko',
  age: age3,
  age,
};

console.log(
  user3.fullName,
  user3.lastName,
  user3['first $$&name'] // в середині квадратних дужок можна робити обчислення(конкатинацію)
  // use3['first' + ' $$&name'], якщо ми виберемо не існуючий ключ, то отримаю значення undefined
);

user3.age = 40;
user3['age'] = 41;

delete user3.age; 
delete user3['age']; // видалення властивості

console.log(user3);


'use strict';

const user5 = {
  firstName: 'Demian',
  age: 39,
  isMarried: false,
};

const key = 'isMarried';

// if (user5.firstName) {
//   console.log('Property exists');
// }

// if (user5[key] !== undefined) { // якщо ключ в змінній, тоді змінну(в котрій ключ) потрібно записувати в квадратних дужках
//   console.log('Property exists'); // властивість false у об'єкта повертає undefined, для цього ми робимо перевірку
// }

// if ('age' in user5) {
//   console.log('Property exists');
// }

if (Object.hasOwn(user5, key)) {
  console.log('Property exists');
}

//нульова перевірка (true/false) підійде в більшості випадків, але потрібно орієнтуватися в остальних
//перша перевірка з if (має слабке місце undefined)
//друга перевірка з if in (має слабке місце з унаслідуванням)
//трєтя Object.hasOwn() покриває всі кейси

'use strict'

const user6 = {
  firstName: 'Misha',
  age: [39, 3, 4],
  isMarried: true,
  2: 'qwe',
  0: 12, // цілі числа з'являться спочатку об'єкту. Також вони будуть впорядковуватися згідно зростанню
};

user6.x = 10; // нова х властивість з'явиться в кінці

for (const key in user6) {
  console.log(key, user6[key]); //[] дужки, тому що значення key в об'єкті немає
} // Щоб перебрати властивості об'єкта, потрібно використовувати user6[key(змінна, яку отримав в циклі)]


console.log(Object.keys(user6)) // в цьому випадку я отримаю масив з усіма ключами

for (const key of Object.keys(user6)) {
  console.log(key);
}

// Якщо нам потрібні одразу тільки значення, можна використати метод Object.values()
// Object.values() створює масив з усіма значеннями
for (const value of Object.values(user6)) {
  console.log(value);
}

// Якщо нам потрібно дістати і ключі і значення існує метод Object.entries()
// Object.entries() створює масив з масивами(які складається з двох елементів) з ключа і значення(кожен масив в масиві це ключ і його значення)
for (const entry of Object.entries(user6)) {
//   console.log(entry);
  console.log(entry[0], entry[1]); // для подальшого оперування з ключем і значенням
}

function getTriathlonDistance(distance) {
  if (distance === 0) {
    return 'Starting Line... Good Luck!';
  };

  const swimming = 3.86;
  const bike = 180.25;
  const run = 42.2;

  const totalDistance = swimming + bike + run;

  if (distance >= totalDistance) {
    return 'You\'re done! Stop running!';
  }

  const diff = (totalDistance - distance).toFixed(2);
  const message = `${diff} to go!`;

  if (distance < swimming) {
    return { swim: message };
  }

  if (distance < swimming + bike) {
    return { bike: message };
  }

  return { run: message };
};

console.log(getTriathlonDistance(180));


function countBoxes(boxes) {
  const result = {};

  debugger;

  for (const box of boxes) {
    if (!result[box]) {
      result[box] = 0;
    }

    result[box]++;
  }

  return result;
}

console.log(countBoxes('qrewwerwerqewrqerwetwetwergt'));


function countMatchingSocks(colors) {
  const result = {};
  let countPairs = 0;

  debugger;

  for (const color of colors) {
    if (result[color]) {
      countPairs++;
      result[color] = 0;
    } else {
      result[color] = 1;
    }
  }

  return countPairs;
}

const socks = ['red', 'blue', 'red', 'green', 'blue', 'red', 'blue', 'yellow'];
const pairs = countMatchingSocks(socks);
console.log(pairs); 


const number69 = [2, 4, 6, 3, 9, 5, 3];

function countNextSmaller(numbers69) {
  const result = [];
  debugger;

  for (let i = 0; i < numbers69.length; i++) {
    let smallerCount = 0; // smallerCount обнуляється тут перед кожним початком нової ітерації

    for (let j = i + 1; j < numbers69.length; j++) {
      if (numbers69[i] > numbers69[j]) {
        smallerCount++;
      }
    }

    result.push(smallerCount);
  }

  return result;
}

console.log(countNextSmaller(number69));