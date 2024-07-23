import { BoredAPIClient } from "./BoredAPIClient.js";
import { Event } from "./Event.js";
import readline from 'readline';


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question(`\nType of search ('random', 'key'): `, input1 => {
  
  rl.question('parameters:  ', async input2 => {

    console.log(`\nType of search: ${input1}`);
    console.log(`Parameter: ${input2}\n`);
    rl.close();

    const client = new BoredAPIClient();

    const eventJson = await client.getEvent(input1, input2);
    console.log(eventJson);
  })
});



// const askQuestion = (query) => {
//   return new Promise(resolve => rl.question(query, resolve));
// };

// const eventType = await askQuestion('Please specify the type of event search ("random", "key", "type"): ');

// const client = new BoredAPIClient();

// const eventJson = await client.getEvent('random');
// console.log(eventJson);

// // const event1 = new Event(...Object.values(eventJson));
// const event2 = new Event(eventJson);

// // console.log(event1);
// console.log(event2);

