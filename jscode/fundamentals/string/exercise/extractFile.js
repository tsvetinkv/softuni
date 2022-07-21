function extractFile(input){
let path = input.split("\\");
let lastEl = path[path.length - 1];
 let file = lastEl.split(".");
 let extension = file.pop();
 let name = file.join(".");
 console.log(`File name: ${name}`);
 console.log(`File extension: ${extension}`);
}
extractFile('Template.bak.nan.pptx')