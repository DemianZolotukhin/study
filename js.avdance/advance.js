'use strict';

const myName = 'Misha';
let myAge = 39;

myAge = myName;
// myAge = 'Misha';

let me = {
  name: 'Misha',
  age: 39,
};

let guest = me;
// let guest = #1;

guest.age = 123;
// #1.age = 123;

console.log(
  me.age,
  guest.age,
)


'use strict';

const myFriend = {
  name: 'John',
  age: 25,
};

let guest1 = myFriend;

guest1.age++;

guest1 = null;

console.log(myFriend);

//null це порожній папірець, а undefined це порожня банка(відсутність папірця)

// метод Object.freeze(), діє як const для змінної, тільки на об'єкт, тобто не можливо здійснювати зміни в об'єкті

'use strict';

const user = {
  age: 25,
};

console.log(user);

//++ оператор повертає значення до збільшення, але саме значення збільшується на один
//якщо використати оператор ++ ще раз, то в минулому розгорнотому об'єкті буде видно збільшення, але якщо ще раз збільшити і перевірити, то значення в об'єкті не збільшиться

'use strict';

const a = { age: 1 }; //#1
const b = { age: 1 }; //#2

const c = a; //#1

console.log(a === b);
console.log(a === c);
// console.log(#1 === b);
// console.log(#1 === #2);
// об'єкти будуть рівними тільки якщо порівнюються однакові адреси якийсь певний об'єкт

'use strict';

const div = document.querySelector('div');

// console.log(div.previousElementSibling);
// console.log(div.prevElementSibling);

const user1 = {
  age: 0, //можна теж змінити на null, але краще не змінювати тип, якщо це має бути число, то нехай буде числом
  name: '',
  passport: null,
  friends: [],
};

console.log(user1.passport);
console.log(user1.friends);
// null ми можемо розглядати як значення якого ще немає, але воно повинне появитися
// undefined ми можемо розглядати як відсутність значення

'use strict';

const bob = { //#1
  name: 'Bob',
  surname: 'Smith',
  partner: null,
};

const alice = { //#2
  name: 'Alice',
  surname: 'Black',
  partner: null,
}

function marry(person1, person2) {
  if (person1.partner) {
    person1.partner.partner = null;
  }

  if (person2.partner) {
    person2.partner.partner = null;
  }

  person1.partner === person2;
  person2.partner === person1;
};

marry(bob, alice); // bob.pertner === #2
marry(bob, {}); // #3 bob.partner === #3
// bob.partner.surname = bob.surname;

console.log(alice.partner);

// Clone object

'use strict';

const bob1 = {
  name: 'Bob',
  surname: 'Smith',
  pertner: null,
};

function clone(source) {
  return Object.assign({}, source, { x: 123 }); // новий об'єкт буде з усіма значеннями source + x: 123 
  return { ...source };

  // for (const key in source) {
  //  copy[key] = source[key];
  // }

  //     return copy;
}

const bob1Copy = clone(bob1);

console.log(bob1);
console.log(bob1Copy);

console.log(bob1 === bob1Copy);




//destructuring

'use strict';

const bob2 = {
  name: 'Bob',
  surname: 'Smith',
  partner: null,
};

const bobCopy2 = clone4(bob2);

function clone4(source) { //деструктуризацію можна робити на пряму в параметрі (замість source)
  const { name: firstName/**перейменувати */, surname/**можна використовувати за їх ім'ям */, age /**= 10 значення за замовчуванням */ } = source; // деструктуризація
  // 
  return {
    firstName,
    surname,
    age,//undefined бо в source об'єкта не було такого значення
    x: 123,
    ...{ partner: 1, b: 2 },
  };
}

console.log(bobCopy2);


//function is an Object

'use strict';

const user5 = () => {
  console.log(123)
}; //функцію можна викликати, а об'єкт ні

user5.age = 39;
user5.firstName = 'Bob';
user5['lastName'] = 'Smyth';

printInfo(user5);

user5();

function printInfo({
  firstName,
  lastName,
  age,
}) {
  const message6 = `!!!${firstName} ${lastName} is ${age}!!!`;

  console.log(message6);
}

function generateChart(statistics) {
  const diagram = {};
  let total = 0;

  // debugger;

  for (const value of Object.values(statistics)) {
    if (typeof value === 'number') {
      total += value;
    }
  }

  for (const robotType in statistics) {
    const quantity = statistics[robotType];
    const diagramAngle = 360 * quantity / total;

    diagram[robotType] = Math.round(diagramAngle);
  }

  return diagram;
}

const objRobot = {
  cleaner: 2,
  driver: 4,
  washer: 14,
  runner: 4,
  builed: 8,
  musician: 'bad',
  painter: null,
  greeter: undefined,
}

console.log(generateChart(objRobot));

function transformState(state, actions) {
  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        addProperties(state, action.extraData);
        break;

      case 'removeProperties':
        removeProperties(state, action.keysToRemove);
        break;

      case 'clear':
        clearProperties(state);
        break;
    }
  }
}

function addProperties(state, toAdd) {
  Object.assign(state, toAdd);
}

function removeProperties(state, toRemove) {
  for (const key of toRemove) {
    delete state[key];
  }
}

function clearProperties(state) {
  for (const key in state) {
    delete state[key];
  }
}


function calculateCost(bucket, products) {
  // debugger;
  // Each value of a `products` object is an object with prices for some details (like a store)
  const stores = Object.values(products);

  // Copy prices from all stores to a single object
  const pricing = Object.assign({}, ...stores);
  let totalPrice = 0;

  for (const product in bucket) {
    // Get final product price: price * quantity
    const productPrice = pricing[product];
    const productQuantity = bucket[product];

    totalPrice += productPrice * productQuantity;
  }

  return totalPrice;
}


console.log(calculateCost({
  display: 20,
  wheel: 100,
  cpu: 40,
}, {
  amazobot: {
    wheel: 12.5,
  },
  robozetka: {
    display: 56.2,
    cpu: 150,
  },
}))



function transformState1(state, actions) {
  const result = [];
  let currentState = { ...state };
  for (const action of actions) {
    const { type, extraData, keysToRemove } = action;

    switch (type) {
      case 'clear':
        currentState = {};
        break;

      case 'addProperties':
        currentState = {
          ...currentState, ...extraData,
        };
        break;

      case 'removeProperties':
        for (const key of keysToRemove) {
          delete currentState[key];
        }
        break;
      default:

    }

    resultState.push({ ...currentState });
  }

  return resultState;
}


//my solution of mateRoyalOil (not finished, there are some issue with that code)
// function fillTank(customer, fuelPrice, amount) {
//   const { money, vehicle: { maxTankCapacity, fuelRemains } } = customer;

//   const toGas = maxTankCapacity - fuelRemains;

//   const priceForGas = amount * fuelPrice;

//   const balanceOfGasAfteRefueling = amount - toGas;

//   const haveSpaceInTank = amount + fuelRemains;

//   switch (true) {
//     case typeof amount === 'undefined':
//       customer.money -= toGas * fuelPrice;
//       customer.vehicle.fuelRemains = maxTankCapacity;

//       break;

//     case haveSpaceInTank <= maxTankCapacity
//     && money >= priceForGas
//     && amount > 2:

//       customer.money -= priceForGas;
//       customer.vehicle.fuelRemains += amount;

//       break;

//     case amount > haveSpaceInTank
//     && money >= priceForGas
//     && amount > 2:

//       customer.money = (money - priceForGas);
//       customer.money += balanceOfGasAfteRefueling * fuelPrice;
//       customer.vehicle.fuelRemains += amount;

//       break;
//   }
// }


//mentors solution 
function fillTank(
  customer,
  fuelPrice,
  amount = Infinity, // to pour as much as possible
) {
  debugger;
  // We need to know how much fuel we can actually pour
  const freeSpace = customer.vehicle.maxTankCapacity - customer.vehicle.fuelRemains;
  const canBuy = customer.money / fuelPrice;

  // not to pour more full than the client wants, can buy or the tank can accommodate
  const requiredAmount = Math.min(amount, freeSpace, canBuy);
  const roundedAmount = roundFuel(requiredAmount);

  // We can't pour less than 2 liters
  if (roundedAmount < 2) {
    return;
  }

  // We pour the tank and take money
  customer.vehicle.fuelRemains += roundedAmount;
  customer.money -= roundPrice(roundedAmount * fuelPrice);
}

// We created separate rounding function not to complicate the code
function roundFuel(fuel) {
  return Math.floor(fuel * 10) / 10;
}

function roundPrice(price) {
  return Math.round(price * 100) / 100;
}

const customer = {
  money: 3000,
  vehicle: {
    maxTankCapacity: 40,
    fuelRemains: 8,
  }
};

console.log(fillTank(customer, 28));


//toFixed повертає рядкове значення(потрібно перетворити в цифри)


//Objects Methods
'use strict';

const bob0 = {
  firstName: 'Bob',
  lastName: 'Smith',
  age: 30,

  print: printInfo5,
  print2(age) {

  }
};// За допомогою додавання методів до об'єктів, ми підказуємо які в цих об'єктів є можливості

// printInfo5(bob0); // у випадку простого виклику ми отримаємо undefined/
bob0.print();

function printInfo5(user) {
  const { firstName, lastName, age = 0 } = this; // this означає, викликати об'єкто що стоїть перед крапкою при виклику
  const message = `!!!${firstName} ${lastName} is ${age}!!!`;

  console.log(message);
}
// З іншого боку функція є більш гнучкою, за допомогою передачі параметрів, я можу виконувати одні і ті самі дії з абсолютно різними параметрами


//Computed Properties

'use strict';

const admin = {
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(value) {
    const parts = value.split(' ');

    if (parts.length < 2) {
      return;
    }

    this.firstName = parts[0];
    this.lastName = parts[1];
  },

  firstName: 'Sergei',
  lastName: 'Sternenko',

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

congratulate(admin);
admin.fullName = 'Andrey Donbas';
congratulate(admin);

function congratulate(user) {
  console.log(`Hi, ${user.fullName}`);
}

console.log(admin.firstName);

// get дозволяє нам не змінювати використання об'єкта якщо в нас змінилася логіка зберігання данних
// get дозволяє нам конструювати властивості, які нам потрібно обчислювати

// set дозволяє нам перевіряти якісь умови, коли ми намагаємося присвоїти значення
// set це розумний спосіб як ми можемо додати перевірки під час встановлення значення
// при цьому ми використовуємо синтаксис присвоювання


//Sometimes we want a property value to be calculated when we read it. 
//For this purpose, we have computed properties in JavaScript. They can be created using the get keyword and are called getters:

// const user = {
//   firstName: 'John',
//   lastName: 'Smith',
//   age: 25,
  
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// console.log(user.fullName); // John Smith


// setter should accept exactly 1 parameter
//If we want to run some logic when we assign a new value to a property, setters can help. They are created by the set keyword.

// const user = {
//   firstName: 'John',
//   lastName: 'Smith',
//   age: 25,
  
//   get userInfo() {
//      return `${this.firstName} ${this.lastName} is ${this.age}`;
//   },
  
//   set fullName(value) {
//     const index = value.indexOf(' ');
//     const firstName = value.slice(0, index);
//     const lastName = value.slice(index + 1);
    
//     this.firstName = firstName;
//     this.lastName = lastName;
//   },
// };

// user.fullName = 'Mike Brown';

// console.log(user.userInfo); // Mike Brown is 25



// With setters, you can easily validate data you want to set to object property. For example, you can check the data type:



// set fullName(value) {
//   if (typeof value !== 'string') {
//     return;
//   }  
    
//   // the rest of the code
// }


// ARRAY METHODS
// How to create an array
'use strict';
const wordsArr = ['one', 'two', 'three'];
const numbersArr = [1, 3, 1, 5, 2, 1, 4];

console.log(wordsArr, numbersArr);
console.log([]);
console.log(['Misha', 38, true]); // Кортеж(англ.tuple);

const numbers2 = new Array(1, 3, 1, 5, 2, 1, 4); //Створення нових масивів;
const numbers3 = Array(1, 3, 1, 5, 2, 1, 4); //Створення нових масивів;

console.log(numbers2, numbers3);

const userName = 'Kandratiev';

console.log(
  userName.split(''),//Розрізає цей рядок на окремі літери(масив створює) ['K', 'a', 'n', 'd', 'r', 'a', 't', 'i', 'e', 'v']
  [...userName],//Спред оператор бере з рядка окремі букви і вставляє в середину масиву(так можна робити з рядком, або з інакшим масивом) ['K', 'a', 'n', 'd', 'r', 'a', 't', 'i', 'e', 'v']
  Array.from(userName),//З рядка створюється масив ['K', 'a', 'n', 'd', 'r', 'a', 't', 'i', 'e', 'v']
);

for (let i = 0; i < wordsArr.length; i++) {
  console.log(wordsArr[i]);
}

for (const n of numbersArr) {
  console.log(n);
}



//How to modify an array

'use strict';

const numbers4 = [0, 1, 2, 3, 4];

console.log(numbers4);

numbers4[numbers4.length] = 99; 
numbers4.push(100, 101, 102);
numbers4.pop() //Метод pop не приймає жодних аргументів, а просто видаляє останній елемент масиву.
//Можна отримати видалений елемент за допомогою присвоєння deletedElement = numbers4.pop()

numbers4.unshift(100, 101, 102); // Метод unshift додає елементи на початку
numbers4.shift() // Метод shift Видаляє перший елемент масиву
//Можна отримати видалений елемент за допомогою присвоєння deletedElement = numbers4.shift()
//На практиці найчастіше використовується метод push, всі інші рідше
console.log(numbers4);



//How to find an element in array
const wordsArr1 = ['first', 'name', 'and', 'last', 'name'];

console.log(wordsArr1);

console.log(
  wordsArr1.includes('and'), //true
  wordsArr1.includes('and', 3), //false //друге значення це індекс з якого ми хочемо почати
  wordsArr1.includes('a'), //false //ми шукаємо елемент за точним співпадінням
);

console.log(
  wordsArr1.indexOf('name'), //1 
  wordsArr1.indexOf('name', 3), //4 //перше входження відбувається по індексу 4
);

console.log(
  wordsArr1.lastIndexOf('name'), //4 
  wordsArr1.lastIndexOf('name', 3), //1 //перше входження відбувається за індексом 1(починаємо з кінця)
);



//Split, join a slice methods

const phraseEx =  'My name is demian';
const wordsEx = phraseEx.split(' ', 3); // Split дозволяє розрізати рядок за будь якими розділювачами
// Якщо потрібно отримати тільки перші три слова, то можна додати обмеження

console.log(wordsEx);

// Якщо потрібно перетворити масив на рядок, це можна зроби за допомогою метома join
console.log(wordsEx.join(' ')); // Якщо використати '' без пробіла то ми отримаємо склеїний рядок

console.log(
  wordsEx.slice(1, -1) // Якщо викликати слайс без параметру, то ми отримаємо точну копію масиву
  // В данному випадку ми хочемо отримати всі елементи крім першого і останнього
);


//Mutating and Non-mutating Methods

'use strict';

const numbers7 = [3, 1, 12, 5, 2, 3, 4];
let result7;

console.log(numbers7);

/*Mutating methods */ //Після цих операцій масив змінюється, або може змінитися
//result7 = numbers7.push(100, 200, 300);
//result7 = numbers7.unshift(100, 200, 300);
//result7 = numbers7.pop();
//result7 = numbers7.shift();

//result7 = numbers7.splice(2, 3, 100, 200, 300); // Починаючи з індекса 2 ми видаляємо 3 елементи. Сплайс видаляє вказану к-сть елементів і повертає їх в якості нового масива
//result7 = numbers7.fill('a', 2, 5); //Змінює елементи масиву на 'a'/ зміни відбудуться з 2 по 5 елемент не включно
//result7 = numbers7.reverse();//змінює порядок елементів на протилежний, він повертає посилання на той самий масив
//result7 = numbers7.sort();//сортує елементи в масиві, але не завжди коректно у випадку двух і більше значних чисел



/*Non mutating methods */ //Після цих операцій масив не змінюється
//result7 = numbers7.includes(3);
//result7 = numbers7.indexOf(3);
//result7 = numbers7.lastIndexOf(3);
//result7 = numbers7.join('-'); //Повертає рядок де всі елементи об'єднані ось цим рядком('-')
//result7 = numbers7.slice(2, 5); //Повертає новий масив, в якому буде частина елементів з індекса 2 до 5 не включно
//result7 = numbers7.concat(100, ['x', 'y', [999]], 200, 300);//повертає новий масив(одного рівня вкладеності), де поєднує елементи мого вхідного масива з числами та елементами інших доданих сюди масивів

console.log('---------');


console.log(numbers7);
console.log(result7);



//Array copying
'use strict';

const numbers8 = [1, 2, 3, 4, 5];
// const result8 = numbers8.slice();
// const result8 = numbers8.concat();
// const result8 = Array.from(numbers8);
// const result8 = Array.from('qwertyu');
const result8 = [
  ...numbers8.slice(0, 2),
  100,
  200,
  300,
  ...numbers8.slice(2), //за допомогою спред оператора ми можемо не тільки скопіювати масив, а і конструювати якийсь новий
];

result8.push(999);

console.log(numbers8);
console.log(result8);


//Array Destructuring

'use strict';
 
const bib = {
  name: 'Bib',
  surname: 'Bibos',
  age: 33,
  isMarried: true,
};

const song = 'one two three four five';

printArr(123, song.split(' '));

function printArr(a, [x, , y, ...otherWords]) { //деструктурування можна зробити одразу в параметрі
  // const [x, , y, ...otherWords] = words;

  console.log(otherWords);
}

printObjectbib(bib)

function printObjectbib(user) {
  const { name, age: x, ...props } = user;

  console.log(props);
}


// Елемент масиву можна отримати за його індексом:

// const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// console.log(
//   weekDays[0], // 'Sunday'
//   weekDays[1], // 'Monday'
//   weekDays[6], // 'Saturday'
  
//   // якщо індекс занадто великий, отримуємо undefined
//   weekDays[10], // undefined
  
//   // чи від'ємний
//   weekDays[-2], // undefined
// );



// Також можна скористатися методом at(). Він працює так само, як arr[index] для додатніх індексів, але обробляє негативні як arr[arr.length - index]. Наприклад:

// console.log(
//   weekDays.at(-1), // 'Saturday'
//   weekDays.at(-2), // 'Friday'
//   weekDays.at(1), // 'Monday'
// );


// Щоб створити новий масив з елементів масиву, що вже існує, можна використати метод slice(). Він працює аналогічно методу slice() для рядків:

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(
//   numbers.slice(3, 8), // [3, 4, 5, 6, 7]
  
//   // перші 5 елементів
//   numbers.slice(0, 5), // [0, 1, 2, 3, 4]
  
//   // елементи від індексу 4 до кінця 
//   numbers.slice(4), // [4, 5, 6, 7, 8, 9]
  
//   // усі елементи масиву
//   numbers.slice(), // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  
//   // від'ємні індекси рахуються з кінця
//   numbers.slice(-4, -2), // [6, 7]
  
//   // усі елементи, крім першого та останнього 
//   numbers.slice(1, -1), // [1, 2, 3, 4, 5, 6, 7, 8]
  
//   // останні 3 елементи
//   numbers.slice(-3), // [7, 8, 9]
// );


//Метод reverse()
const numbers = [1, 2, 3, 4, 5];

// debugger;

// Додаємо метод reverse до об'єкта Array
numbers.reverse = function() {
  for (let i = 0; i < this.length / 2; i++) {
    const value = this[i];
    this[i] = this[this.length - 1 - i];
    this[this.length - 1 - i] = value;
  }
  return this;
};

// Викликаємо метод reverse для обертання масиву
console.log(numbers.reverse());

// Результат: змінений масив
console.log(numbers);


const numbers43 = [5, 6, 1, 4, 2, 5];
numbers43.indexOf = function(param, fromIndex = 0) {

  // debugger;

  let index = fromIndex;

  if (index < 0) {
    index += this.length;
  }

  if (index < 0) {
    index = 0;
  }

  for (let i = index; i < this.length; i++) {
    if (this[i] === param) {
      return i;
    }
  }

  return -1;
};

console.log(numbers43.indexOf(4, -1))

const searchRobot = (robot, workPlaces) => {
  for (const place of workPlaces) {
    if (place.staff.includes(robot.name)) {
      return place.name;
    }
  }
};
