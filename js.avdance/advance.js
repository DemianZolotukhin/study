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

    debugger;
  
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
  