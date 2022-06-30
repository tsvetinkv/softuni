function catFactory(cats){
    let cates = []; 
class Cat {
constructor(name, age){
    this.name = name;
    this.age = age;
}
sayMeow(){
    console.log(`${this.name}, age ${this.age} says Meow`);
}
}

for (let i = 0; i < cats.length; i++){
    let catData = cats[i].split(' ');
    let name = catData[0];
    let age = catData[1];
    let myCat = new Cat(name, age);
    cates.push(myCat);
}
for (let cat of cates) {
    cat.sayMeow();
}
}
catFactory(['Candy 1', 'Poppy 3', 'Nyx 2'])