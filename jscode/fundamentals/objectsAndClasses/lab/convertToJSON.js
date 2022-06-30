function convertToJSON(name, lastName, hairColor){
let obj = {
    name,
    lastName,
    hairColor
};
let convert = JSON.stringify(obj);
console.log(convert);
}
convertToJSON('George', 'Jones','Brown')