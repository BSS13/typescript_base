class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  //To ensure that this function can only be called from an instance of class Department
  describe(this: Department) {
    console.log("Department: " + this.name);
  }
}

const department = new Department("IT");
department.describe();

//To handle these scenarios, we add the type of this keyword in the describe function in the class
//If we add the name property, it works well - compiles down to old JS function type compilation
const departmentCopy = { name: "DUMMY", describe: department.describe };
departmentCopy.describe();
