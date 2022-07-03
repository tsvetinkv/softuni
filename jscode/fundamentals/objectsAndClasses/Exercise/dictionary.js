function dictionary(jsonArray) {
    let words = [];
    let dict = {};
  for (let word of jsonArray) {
    let dictionary = JSON.parse(word);
dict.term = dictionary;
  console.log(dict.term);
 let split = word.split(":")
 //console.log(split);
//  let remove =  split[0].replace('{"', "");
//  let firstWord = remove.replace('"', "")
//  //console.log(firstWord);
//  dict.term = firstWord;
 let removeFromDef = split[1].replace('"}', "")
 let definition = removeFromDef.replace('"', "")
 //console.log(definition)
 dict.definition = definition;
  words.push(dict.term);
  //console.log(words[0]);
    // words.sort((a, b) => a.localeCompare(b));
    // console.log(dict.term);
   
   //console.log(dict)
  } 

}

dictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
//Term: Boiler => Definition: A fuel-burning apparatus or container for heating water.