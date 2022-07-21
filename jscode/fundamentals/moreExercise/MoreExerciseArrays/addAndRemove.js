function addAndRemove(arr) {
  let initialNumber = 1;
  let res = [];
  for (const command of arr) {
    switch (command) {
      case "add":
        res.push(initialNumber);
        initialNumber++;
        break;
      case "remove":
       let remove =  res.pop();
        initialNumber++;
        break;
    }
  }
  if(res.length > 0){
    console.log(res.join(" "));
  }else{
    console.log('Empty');
  }
  
}
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
//1 4 5
