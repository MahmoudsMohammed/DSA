// Test Stack Over Flow
let counter = 0;
function test() {
  ++counter;
  // const arr = Array(100).fill(0);
  test();
}
// try {
//   test();
// } catch (err) {
//   console.log(`Stack Over Flow Function Calls Are ${counter}`);
// }

// Factorial
function factorialLooping(n) {
  let res = 1;
  for (let i = n; n > 1; n--) {
    res *= n;
  }
  return res;
}

function factorialRecursion(n) {
  if (n === 1) {
    return n;
  } else {
    return n * factorialRecursion(n - 1);
  }
}

// console.log(factorialLooping(5));

// Fibonacci

function fibonacciLoop(i) {
  let fib = [0, 1];
  if (fib[i]) {
    return fib[i];
  } else {
    for (let x = 2; x <= i; x++) {
      fib[x] = fib[x - 1] + fib[x - 2];
    }
    return fib[i];
  }
}

// O(2^n) => Exponential Time
function fibonacciRecursive(i) {
  if (i === 0 || i === 1) {
    return i;
  } else {
    return fibonacciRecursive(i - 1) + fibonacciRecursive(i - 2);
  }
}

// console.log(fibonacciLoop(8));

// Reverse String

function reverseIterate(str) {
  let res = '';
  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return res;
}

// console.log(reverseIterate('yoyo master'));

function reverseRecursion(str) {
  if (str.length === 0) {
    return '';
  }
  return str[str.length - 1] + reverseRecursion(str.slice(0, -1));
}

console.log(reverseRecursion('yoyo master'));
