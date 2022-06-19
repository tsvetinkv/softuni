function houseParty(array) {
  let listOfPeople = [];

  for (let i = 0; i < array.length; i++) {
    let command = array[i].split(" ");
    let name = command[0];
    if (command.length == 3) {
      if (listOfPeople.includes(name)) {
        console.log(`${name} is already in the list!`);
        listOfPeople.splice(i,1);
      }else {
         listOfPeople.push(name);
      }
     
    }else if(command.length == 4) {
        let IndexOfPerson = listOfPeople.indexOf(name);
        if(IndexOfPerson > -1) {
            listOfPeople.splice(IndexOfPerson, 1); 
        }else{
            console.log(`${name} is not in the list!`);
        }
       
    }
  }
  console.log(listOfPeople.join('\n'));
}
houseParty(['Tom is going!',

'Annie is going!',

'Tom is going!',

'Garry is going!',

'Jerry is going!']);

// "{name} is going!"

// - "{name} is not going!"

// If you receive the first type of input, you have to add the person if he/she is not in the list
// (If he/she is in the list print: "{name} is already in the list!").

// If you receive the second type of input, you have to remove the person if he/she is in the list
// (if not print: "{name} is not in the list!").
