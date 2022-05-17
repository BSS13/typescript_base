type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

//Intersection Type (&)
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Mario",
  privileges: ["create-server"],
  startDate: new Date(),
};

//Type Guard using Key property
type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);

  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }

  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}

printEmployeeInformation(e1);

//Instance of
class Car {
  drive() {
    console.log("Driving ....");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck....");
  }

  loadCargo(amount: number) {
    console.log("Loading Cargo with Amount " + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(600);
  }
}

useVehicle(v1);
useVehicle(v2);
