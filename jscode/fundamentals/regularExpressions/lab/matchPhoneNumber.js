function matchPhoneNumber(numbers){
let regex = /\+359( |-)2\1\d{3}\1\d{4}\b/g;
let validPhones = [];
while ((phone = regex.exec(numbers)) !== null){
    validPhones.push(phone[0]);
}
console.log(validPhones.join(', '));
}
matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);