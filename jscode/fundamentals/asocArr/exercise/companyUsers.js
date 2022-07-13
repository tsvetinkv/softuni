function companyUsers(input) {
  let companyAndUsers = {};
  for (const line of input) {
    let token = line.split(" -> ");
    let company = token[0];
    let id = token[1];
    if (!companyAndUsers.hasOwnProperty(company)) {
      companyAndUsers[company] = new Set();
    }
    if (!companyAndUsers.hasOwnProperty(id)) {
      companyAndUsers[company].add(id);
    }
  }
  let entries = Object.entries(companyAndUsers);
  let sortEntries = entries.sort(([keyA, valueA], [keyB, valueB]) => {
    return keyA.localeCompare(keyB);
  });

  for (const [key, value] of sortEntries) {
    console.log(key);
    for (let id of value) {
      console.log(`-- ${id}`);
    }
  }
}
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> CC12344",
  "Lenovo -> XX23456",
  "SoftUni -> AA12345",
  "Movement -> DD11111",
]);

// Write a function, which keeps the information about companies and their employees.
// You will receive an array of strings containing the company name and employee's id.
// Add each employee to the given company. Keep in mind that a company cannot have two employees with the same id.
// When you finish reading data, order the companies by their name in ascending order.
// Print the company name and each employee's id in the following format:
// {companyName}
// -- {id1}
// -- {id2}
// -- {idN}
