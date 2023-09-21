const x = "Hello world";
console.log(x);


let processed = 0;

function processArg(num) {
  return (num + 8) / 5;
}

// Only change code below this line
processed = processArg(7);
console.log(processed);

let word = 'lengthOfPenis' 
  const result = [];

  for (let i = 0; i < word.length; i++) {
    const part = word.slice(i) + word.slice(0, 1);

    result.push(part.toUpperCase());
  }

  return result;

