export class Event {

  // constructor(_activity, _accessibility, _type, _participants, _price, _link, _key){
  //   this.activity = _activity;
	//   this.accessibility = _accessibility,
	//   this.type = _type,
	//   this.participants = _participants;
	//   this.price = _price;
	//   this.link = _link;
	//   this.key = _key;
  // }

  constructor(json) {
    for (const [key, value] of Object.entries(json)) {
      this[key] = value;
    }
  }
}