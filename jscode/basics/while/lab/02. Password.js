function password(input){
let index = 0
let username = input[index++]
let password = input[index++]
let gues = input[index++]
while(gues !== password){
   
    gues = input[index++]
    
}
 console.log(`Welcome ${username}!`);
}
password(["Nakov",
"1234",
"Pass",
"1324",
"123"])
