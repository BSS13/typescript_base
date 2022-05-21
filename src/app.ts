function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger("LOGGING - PERSON")
class PersonClass {
  name = "Mario";

  constructor() {
    console.log("Creating person Obejct");
  }
}

const person = new PersonClass();
console.log(person);
