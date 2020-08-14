const faker = require("faker");

let fakeName = faker.name.findName();
let fakeEmail = faker.internet.email();

console.log(fakeName);
console.log(fakeEmail);