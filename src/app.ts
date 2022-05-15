class Department {
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  //To ensure that this function can only be called from an instance of class Department
  describe(this: Department) {
    console.log(`Department ${this.name} has the id ${this.id}`);
  }

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
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const department = new Department("d1", "IT");
department.addEmployee("ABC");
department.addEmployee("DEF");
department.describe();
department.printEmployeeInformation();

const itDepartment = new ITDepartment("d2", ["Mario"]);
itDepartment.addEmployee("123");
itDepartment.addEmployee("456");
itDepartment.describe();
itDepartment.name = "NEW NAME";
itDepartment.printEmployeeInformation();

const accountingDepartment = new AccountingDepartment("d3", []);
accountingDepartment.addReport("Something went wrong......");
accountingDepartment.printReports();

//To handle these scenarios, we add the type of this keyword in the describe function in the class
//If we add the name property, it works well - compiles down to old JS function type compilation
// const departmentCopy = { name: "DUMMY", describe: department.describe };
// departmentCopy.describe();
