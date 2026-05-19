const services = [
  "Hair Braiding",
  "Haircut",
  "Massage",
  "Facial",
  "Makeup"
];

services.push("Pedicure");

services.pop();

services.splice(2, 1); // removes "Massage"

console.log("Total Services:", services.length);

console.log(services);

console.log("First Service:", services[0]);
console.log("Second Service:", services[1]);
console.log("Last Service:", services[services.length - 1]);


