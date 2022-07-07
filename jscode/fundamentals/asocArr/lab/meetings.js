function meetings(array) {
  let meets = {};
  for (const line of array) {
    let [day, name] = line.split(" ");
    if (!meets.hasOwnProperty(day)) {
      console.log(`Scheduled for ${day}`);
      meets[day] = name;
    } else {
      console.log(`Conflict on ${day}!`);
    }
  }
  for (const [key, value] of Object.entries(meets)) {
    console.log(`${key} -> ${value}`);
  }
}
meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
