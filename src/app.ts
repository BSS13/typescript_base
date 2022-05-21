//Decorator Factory
function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function withTemplate(template: string, hookId: string) {
  return function (_: Function) {
    const hookEl = document.getElementById(hookId);
    if (hookEl) {
      hookEl.innerHTML = template;
    }
  };
}

@Logger("LOGGING - PERSON")
@withTemplate("<h1>My Person Object </h1>", "app")
class PersonClass {
  name = "Mario";

  constructor() {
    console.log("Creating person Obejct");
  }
}

const person = new PersonClass();
console.log(person);
