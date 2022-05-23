function sumPrimeNonprime(input){
    index = 0;
   let sumPrime = 0;
    let sumNonprime = 0;
    while (input[index] !== "stop")
    {
       let num = Number(input[index]);
       if (num < 0){
           console.log('Number is negative.');
       } else {
       let isPrime = true;
           for (let i = 2; i < num; i++){

            if (num % i == 0 )
            {
                isPrime = false;
                break;
            }
           }
        if (isPrime){
            sumPrime += num;
            }else{
                sumNonprime += num;
            }
       }
     index++;
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonprime}`);
}
sumPrimeNonprime(["3",
"9",
"0",
"7",
"19",
"4",
"stop"])
