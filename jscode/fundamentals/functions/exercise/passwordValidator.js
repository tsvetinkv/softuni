function passwordValidator(pass){
let isValid = true;
if (!(6 <= pass.length && pass.length <= 10)) {
    isValid = false;
    console.log("Password must be between 6 and 10 characters");
}

 if (!onlyLettersAndNumbers(pass)) {
        isValid = false
        console.log("Password must consist only of letters and digits");
    }

if (!containsNumber(pass)) {
    isValid = false
    console.log("Password must have at least 2 digits");
}
   
if (isValid){
    console.log("Password is valid");
}

function onlyLettersAndNumbers(str) {
    return /^[A-Za-z0-9]*$/.test(str);
  }

  function containsNumber(str) {
    
let counter = 0;
for (const symbol of pass) {
    let cuurChar = symbol.charCodeAt(0);
    if (cuurChar >= 48 && cuurChar <= 57){
        counter++;
    }
}
if (counter >= 2){
    return true;
}else{
    return false;
}
  }

}passwordValidator('logIn')
console.log("-------------");
passwordValidator("Pa$s$s")

