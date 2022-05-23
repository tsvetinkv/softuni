function concatenateData(output) {
    let name = output[0];
    let lastName = output[1];
    let age = output[2];
    let town = output[3];
  
console.log(`You are ${name} ${lastName}, a ${age}-years old person from ${town}.`);
}
concatenateData(['Tsveti', 'Nikolova', 16, 'Vratsa']);