function towns(arr) {
  let res = {};
  for (const city of arr) {
    let row = city.split(" | ");
    let town = row[0];
    let latitude = +row[1];
    let longitude = +row[2];
    latitude = latitude.toFixed(2);
    longitude = longitude.toFixed(2);
    res.town = town;
    res.latitude = latitude;
    res.longitude = longitude;
    console.log(res);
  }
}
towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);

// You will receive the input as an array of strings,
//  where each string represents a table row, with
//  values on the row separated by pipes " | " and spaces.

// The table will consist of exactly 3 columns "Town",
// "Latitude" and "Longitude". The latitude and longitude
// columns will always contain valid numbers. Check the
// examples to get a better understanding of your task.

// The output should be objects. Latitude and longitude
//  must be parsed to numbers and formatted to the second decimal point!
