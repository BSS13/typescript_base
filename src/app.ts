abstract class Department {
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {}

  static createEmployee(name: string) {
    return { name: name };
  }

  // //To ensure that this function can only be called from an instance of class Department
  // describe(this: Department) {
  //   console.log(`Department ${this.name} has the id ${this.id}`);
  // }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log("IT department with ID: "+ this.id);
  }
}

class AccountingDepartment extends Department {
  //Data Member
  private lastReport: string;

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  //Abstract Function Overriding
  describe() {
    console.log("Accounting Department - ID: "+ this.id)
  }

  //Getter
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  //Setter
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  //Member Functions
  addEmployee(name: string) {
    if (name === "Ghost") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

// const department = new Department("d1", "IT");
// department.addEmployee("ABC");
// department.addEmployee("DEF");
// department.describe();
// department.printEmployeeInformation();

const itDepartment = new ITDepartment("d2", ["Mario"]);
itDepartment.addEmployee("123");
itDepartment.addEmployee("456");
itDepartment.describe();
itDepartment.name = "NEW NAME";
itDepartment.printEmployeeInformation();

const accountingDepartment = new AccountingDepartment("d3", []);
accountingDepartment.addReport("Something went wrong......");
accountingDepartment.printReports();
accountingDepartment.addEmployee("Ghost");

//To handle these scenarios, we add the type of this keyword in the describe function in the class
//If we add the name property, it works well - compiles down to old JS function type compilation
// const departmentCopy = { name: "DUMMY", describe: department.describe };
// departmentCopy.describe();
