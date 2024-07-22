export class Person {

  constructor(_name, _id) {

    if (this.constructor === Person) {
      throw Error('Abstarct class!');
    }

    this.name = _name;
    this.id = _id;

  }
}