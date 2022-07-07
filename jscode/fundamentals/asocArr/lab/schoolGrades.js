function schoolGrades(input) {
  let register = new Map();

  for (let line of input) {
    let split = line.split(" ");
    let name = split.shift();
    let setOfGrade = split;

    if (!register.has(name)) {
      register.set(name, setOfGrade);
    } else {
      let oldSet = register.get(name);
      for (let grade of setOfGrade) {
        oldSet.push(grade);
      }
      register.set(name, oldSet);
    }
  }
  let sortEntries = Array.from(register.entries()).sort(([keyA], [keyB]) => {
    return keyA.localeCompare(keyB);
  });
  for (let [key, val] of sortEntries) {
    let sumGrades = 0;
    for (grade of val) {
      sumGrades += Number(grade);
    }
    let avg = sumGrades / val.length;
    console.log(`${key}: ${avg.toFixed(2)}`);
  }
}
schoolGrades(["b 5", "a 4", "c 2", "c 3", "b 6", "c 2"]);
