function addNumbers(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

printResult(addNumbers(5, 12));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

//Function Types (Just type)
let combineValuesCheck: Function;

//Complete with values and return (Function TYPE)
let combineValues: (a: number, b: number) => number;

combineValues = addNumbers;

console.log(combineValues(8, 7));

addAndHandle(10, 20, (result) => {
  console.log(result);
});

type CombinableType = number | string;

function addValues(a: number, b: number): number;
function addValues(a: string, b: string): string;
function addValues(a: string, b: number): string;
function addValues(a: number, b: string): string;
function addValues(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = addValues("Bal", "SS");
console.log(result?.toUpperCase);

