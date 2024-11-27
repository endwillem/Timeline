export default class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
export function logName(user) {
    console.log(`user name: ${user.name}`);
}
export function logAge(user) {
    console.log(`user age: ${user.age}`);
}
