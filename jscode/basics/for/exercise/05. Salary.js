function salary(input) {
    let index = 0;
    let n = Number(input[index]);
    index++;
    let salary = Number(input[index]);
    index++;
    let facebook = 150; 
    let instagram = 100; 
    let reddit = 50;
    let isSalary = true; 
    for (let i = 0; i < n; i++) {
        let tabs = input[index];
        index++;
        switch (tabs) {
            case 'Facebook': salary -= facebook; break;
            case 'Instagram': salary -= instagram; break;
            case 'Reddit': salary -= reddit; break;
        }
         if(salary <= 0){
             
        console.log(`You have lost your salary.`);
 isSalary = false; break;
    }
    }
    if(isSalary){
    console.log(salary);
    }
}salary(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])
