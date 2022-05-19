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
