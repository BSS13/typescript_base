console.log("Generics");

//Array Generic Type
const names: Array<string> = ["SpiderMan", "Mario"];

//Promise Generic
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done!");
  }, 2000);
});

promise.then((data) => {
  data.split(" ");
});
