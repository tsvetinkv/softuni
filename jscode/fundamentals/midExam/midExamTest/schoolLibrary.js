function schoolLibrary(array) {
    let shelf = array.shift().split("&");
    while (array != "Done") {
      let commandAndBook = array.shift().split(" | ");
      let command = commandAndBook.shift();
      let book = commandAndBook.shift();
      switch (command) {
        case "Add Book":
          if (!shelf.includes(book)) {
            shelf.unshift(book);
          }
          break;
        case "Take Book":
          if (shelf.includes(book)) {
            let i = shelf.indexOf(book)
            shelf.splice(i, 1);
          }
          break;
        case "Insert Book":
          if (!shelf.includes(book)) {
            shelf.push(book);
          }
          break;
        case "Swap Books":
          let book1 = book;
          let book2 = commandAndBook.shift();
          if (shelf.includes(book1) && shelf.includes(book2)) {
            let index1 = shelf.indexOf(book1);
            let index2 = shelf.indexOf(book2);
            temp = shelf[index2];
            shelf[index2] = shelf[index1];
            shelf[index1] = temp;
            // shelf[index1] = book2;
            // shelf[index2] = book1;
          }
          break;
        case "Check Book":
          let index = Number(book);
          if (shelf.length - 1 >= index && index > 0) {
            let chek = shelf[index];
            console.log(chek);
          }
          break;
      }
    }
    console.log(shelf.join(", "));
  }
schoolLibrary(["Don Quixote&The Great Gatsby&Moby Dick",
"Add Book | Ulysses",
"Take Book | Don Quixote",
"Insert Book | Alice's Adventures in Wonderland",
"Done"]);
//Ulysses, The Great Gatsby, Moby Dick, Alice's Adventures in Wonderland
console.log("---------------------");
schoolLibrary(["War and Peace&Hamlet&Ulysses&Madame Bovary",
"Check Book | 2",
"Swap Books | Don Quixote | Ulysses",
"Done"]);
//Ulysses
//War and Peace, Hamlet, Ulysses, Madame Bovary
console.log("---------------------");
schoolLibrary(["Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
"Add Book | Catch-22",
"Swap Books | Anna Karenina | Catch-22",
"Take Book | David Copperfield",
"Done"]);
//Catch-22, Heart of Darkness, Anna Karenina, The Stranger


