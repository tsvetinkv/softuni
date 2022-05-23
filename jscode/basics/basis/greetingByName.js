function greeting(index) {
let name = index[0];
console.log(`Hello, ${name}!`);
}
greeting(["Tsveti"]);

function greetingByName(input) {
    let name = input[0];
    let greeting = "Hello, " + name + "!";
    console.log(greeting);
  }
  greetingByName(['Svetlin Nakov']);
  