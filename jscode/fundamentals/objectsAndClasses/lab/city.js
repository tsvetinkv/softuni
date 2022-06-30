function city(cityInfo) {
for (let info of Object.keys(cityInfo)) {
console.log(`${info} -> ${cityInfo[info]}`);
}
}
city({
  name: "Plovdiv",

  area: 389,

  population: 1162358,

  country: "Bulgaria",

  postCode: "4000",
});

//name -> Plovdiv area -> 389 population -> 1162358 country -> Bulgaria postCode -> 4000
