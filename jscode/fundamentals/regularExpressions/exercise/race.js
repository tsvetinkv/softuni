function race(arr) {
  let names = /[A-Za-z]/gm;
  let scores = /\d/gm;
  let receParticipants = {};
  let peopleInRace = arr.shift().split(", ");
  for (let participant of peopleInRace) {
    receParticipants[participant] = 0;
  }

  for (const line of arr) {
    if (line == "end of race") {
      break;
    }
    let name = line.match(names).join("");
    let distancearr = line.match(scores);
    let sumDistance = 0;
    for (const num of distancearr) {
      sumDistance += Number(num);
    }
    if (receParticipants.hasOwnProperty(name)) {
      receParticipants[name] += sumDistance;
    }
  }
  let arrFromRace = [];
  for (const el of Object.entries(receParticipants)) {
    arrFromRace.push(el);
  }
  let sortDistance = arrFromRace.sort(
    ([nameOne, distanceOne], [nameTwo, distanceTwo]) => {
      return distanceTwo - distanceOne;
    }
  );
  sortDistance = sortDistance.slice(0, 3);
  for (let i = 0; i < sortDistance.length; i++) {
    if (i === 0) {
      console.log(`1st place: ${sortDistance[i][0]}`);
    } else if (i === 1) {
      console.log(`2nd place: ${sortDistance[i][0]}`);
    } else if (i === 2) {
      console.log(`3rd place: ${sortDistance[i][0]}`);
    }
  }
}
race([
  "Ronald, Bill, Tom, Timmy, Maggie, Michonne",

  "Mi*&^%$ch123o!#$%#nne787) ",

  "%$$B(*&&)i89ll)*&) ",

  "R**(on%^&ald992) ",

  "T(*^^%immy77) ",

  "Ma10**$#g0g0g0i0e",

  "end of race",
]);
