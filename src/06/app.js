// Iterables & Iterators - Protocols
const obj = {
  [Symbol.iterator]: function () {
    let step = 0;
    const iterator = {
      next: function () {
        step++;
        if (step === 1) {
          return { value: "Hello", done: false };
        } else if (step === 2) {
          return { value: "World", done: false };
        }
        return { value: undefined, done: true };
      },
    };
    return iterator;
  },
};

for (const word of obj) {
  console.log(word);
}

// Generators  == easy iterator
function normalFunction() {
  console.log("Hello");
  console.log("world !!!");
}

normalFunction();
normalFunction();
function* generatorFunction() {
  yield "Hello + + +";
  yield "World + + +"; // yield
}

const generatorObject = generatorFunction();

for (const word of generatorObject) {
  console.log(word);
}
