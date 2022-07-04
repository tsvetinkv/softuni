function dictionary(jsonArray) {
  let dictionary ={};
 jsonArray.forEach((element) => Object.assign(dictionary,JSON.parse(element)));
 let sortedKeys = Object.keys(dictionary).sort((a, b) => a.localeCompare(b));
 sortedKeys.forEach((term) => {
 let definition = dictionary[term];
 console.log(`Term: ${term} => Definition: ${definition}`);
  });
}


dictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
//Term: Boiler => Definition: A fuel-burning apparatus or container for heating water.


// function dictionary(jsonArray) {
//   // създаваме си един празен обект който след това ще ни държи стойностите на всички елементи от json масива
// const dictionary = {};
// // JSON.parse ни създава обект от JSON string
// // ключовете и валютата от всеки обект ги добавяме към dictionary s JSON.assign
// jsonArray.forEach((element) => Object.assign(dictionary,JSON.parse(element)));

// // Object.keys() ни връща всичките ключове към вече напълнения със стойности dictionary обект и след това ги сортираме
// const sortedKeys = Object.keys(dictionary).sort((a, b) => a.localeCompare(b));
// // => ["Boiler", "Bus" ...]

//   // Минаваме през всички елементи от масива със сортирани ключове
// sortedKeys.forEach((term) => {
//   // dictionary[term] е като все едно да направим dictionary["Boiler"] или dictionary.Boiler
//   // защото term ни е от елемент от sortedKeys
//   const definition = dictionary[term];
//   console.log(`Term: ${term} => Definition: ${definition}`);
// });
// }