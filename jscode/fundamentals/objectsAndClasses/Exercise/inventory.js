function inventory(array) {
  let heroes = [];
  for (const hero of array) {
    let split = hero.split(" / ");
    let name = split[0];
    let level = split[1];
    let items = split[2];
    let currentHero = {
      name: name,
      level: +level,
      items: items,
    };
    heroes.push(currentHero);
  }
   let sorted = heroes.sort((a, b) => {
      return a.level - b.level;
    });
    for (const hero of sorted) {
      console.log(`Hero: ${hero.name}`);
      console.log(`level => ${hero.level}`);
      console.log(`Items => ${hero.items}`);
    }
}
inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
//Hero: Hes
//level => 1
//items => Desolator, Sentinel, Antara
// Hero: Derek
//level => 12
//items => BarrelVest, DestructionSword
//Hero: Isacc level => 25 items => Apple, GravityGun