// OBJECT DESTRUCTURING
/*
const person = {
  name: 'Monty',
  age: 3,
  type: 'Lord',
  location: {
    city: 'Siberia',
    temp: 32
  }
};
const {name, age, type='cat'} = person;
console.log(`${name} is a ${type}.`)

const {city, temp: temperature} = person.location;
if (city && temperature){
console.log(`It's ${temperature} in ${city}.`)
}

const book = {
  title: 'The Raj Quartet',
  author: 'Paul Scott',
  publisher: {
    name: 'Penguin'
  }
};

const {name: publisherName = "self-published"} = book.publisher;
console.log(publisherName);
*/

// ARRAY DESTRUCTURING

const address = ['6090 Ridgeview Drive', 'Norton Shores', 'Michigan' , '49441'];

//const [street, city, state = "Hawaii", zip] = address;
const [, , state = "Hawaii", ] = address;

//console.log (`I live at ${street} in ${city}, ${state}`);

console.log(`Say aloha to ${state}`);

const item =['coffee (iced)', '$2.00', '$3.50', '$2.75']
const [thing, , medium] = item;
console.log(`A medium ${thing} costs ${medium}.`)