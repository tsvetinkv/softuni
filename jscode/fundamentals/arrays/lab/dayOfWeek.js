function dayOfWeek(n) {
  if (n < 1 || n > 7) {
    console.log("Invalid day!");
    return;
  }
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  console.log(days[n - 1]);
}
dayOfWeek(11);
