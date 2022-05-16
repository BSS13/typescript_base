interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

interface Greetable {
  name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user1: Person;
user1 = {
  name: "Mario",
  age: 25,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

user1.greet("Hello this this is ");
