function matchFullName(str){
let regex = /\b[A-Z][a-z]+ [A-Z][a-z]+/g;
let matches = str.match(regex);
console.log(matches.join(' '));
}
matchFullName('Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov')