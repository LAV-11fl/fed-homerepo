// 1. Створюємо клас Person з властивостями name та age
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // 2. Метод класу виводить привітання
  sayHello() {
    console.log(`Привіт, мене звати ${this.name}`);
  }
}

const john = new Person("John", 30);
console.log(john);
john.sayHello();

// 3. Student наслідує Person і має додаткову властивість studentId
class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }

  study() {
    console.log(`${this.name} навчається. ID студента: ${this.studentId}`);
  }
}

const student = new Student("Alice", 20, "JS-101");
console.log(student);
student.sayHello();
student.study();
