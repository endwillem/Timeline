export default class User {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

export function logName(user: { name: string }) {
  console.log(`user name: ${user.name}`);
}

export function logAge(user: { age: number }) {
  console.log(`user age: ${user.age}`);
}
