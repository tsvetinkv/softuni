function ages(age){
if (age < 0) {
    console.log('out of bounds');
}else if(age >= 0 && age <= 2){
    console.log('baby');
}else if(age >= 3 && age <= 13){
    console.log('child');
}else if(age >= 14 && age <= 19){
    console.log('teenager');
}else if(age >= 20 && age <= 65){
    console.log('adult');
}else{
    console.log('elder');
}
}ages(100);