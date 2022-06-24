function shoppingList(initialList) {
  let list = initialList.shift().split("!");
  while (initialList != "Go Shopping!") {
    let commands = initialList.shift().split(" ");
    let command = commands.shift();
    let item = commands.shift();
    switch (command) {
      case "Urgent":
        if (list.includes(item)) {
            break;
          }else{
               list.shift(item);
          }
        break;
      case "Unnecessary":
        if (!list.includes(item)) {
            break;
          }else{
             list.splice(list.indexOf(item), 1);
          }
        break;
      case "Correct":
        let oldItem = item;
        let newItem = commands.join("");
        if (list.includes(oldItem)) {
          list.splice(list.indexOf(oldItem) + 1, 0, newItem);
           list.splice(list.indexOf(oldItem), 1);
        }
        break;
      case "Rearrange":
        if (list.includes(item)) {
            list.splice(list.indexOf(item), 1)
        }
        break;
    }
  }
  console.log(list.join(', '));
}
shoppingList([
  "Tomatoes!Potatoes!Bread",
  "Unnecessary Milk",
  "Urgent Tomatoes",
  "Go Shopping!",
]);
//Tomatoes, Potatoes, Bread
shoppingList([
  "Milk!Pepper!Salt!Water!Banana",
  "Urgent Salt",
  "Unnecessary Grapes",
  "Correct Pepper Onion",
  "Rearrange Grapes",
  "Correct Tomatoes Potatoes",
  "Go Shopping!",
]);
//Milk, Onion, Salt, Water, Banana

// You will receive an initial list with groceries separated by an exclamation mark "!".
// After that, you will be receiving 4 types of commands until you receive "Go Shopping!".
// •	"Urgent {item}" - add the item at the start of the list.  If the item already exists, skip this command.
// •	"Unnecessary {item}" - remove the item with the given name, only if it exists in the list.
//  Otherwise, skip this command.
// •	"Correct {oldItem} {newItem}" - if the item with the given old name exists, change its name
// with the new one. Otherwise, skip this command.
// •	"Rearrange {item}" - if the grocery exists in the list, remove it from its current position
// and add it at the end of the list. Otherwise, skip this command.
//•	There won't be any duplicate items in the initial list
//•	Print the list with all the groceries, joined by ", ":
//"{firstGrocery}, {secondGrocery}, … {nthGrocery}"
