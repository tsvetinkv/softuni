function project(output) {
    let name = output[0];
    let projects = Number(output[1]);
    let hours = 3 * projects;
    
console.log(`The architect ${name} will need ${hours} hours to complete ${projects} project/s.`);
}
project(["Sanya ","9 "]);