//Generic Function with Constraint handling
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

console.log(merge({ name: "Mario" }, { age: 25 }));
const mergedObj = merge({ name: "Mario" }, { age: 25 });
console.log(mergedObj.name);

const mergedObj1 = merge({ name: "Bob" }, { age: 23 });
console.log(mergedObj1);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got " + element.length + " element.";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Hi there!"));
