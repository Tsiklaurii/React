class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    describe() {
        return `${this.name} is ${this.age} years old`;
    }
}

class Employee extends Person {
    constructor(name, age, position) {
        super(name, age);
        this.position = position;
    }
    describe() {
        return super.describe() + ` and works as ${this.position}`;
    }
}

class Department {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    listEmployees() {
        return this.employees.map(emp => emp.describe()).join("\n");
    }
}

const employee1 = new Employee("Ana", 25, "Frontend Developer");
const employee2 = new Employee("Luka", 30, "Backend Engineer");

const department = new Department("Development");

department.addEmployee(employee1);
department.addEmployee(employee2);

console.log(department.listEmployees());