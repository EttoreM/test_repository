import  { Person } from './Person.js';

export class Member extends Person {
  constructor(_name, _id) {
    super(_name, _id);
  }

  getName() {
    console.log(this.name);
  }
}