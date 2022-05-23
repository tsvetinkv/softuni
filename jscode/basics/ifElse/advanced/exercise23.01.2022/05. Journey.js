function journey(input){
    let buget = Number(input[0])
    const season = input[1]
   
    if(buget <= 100){
console.log("Somewhere in Bulgaria");
if(season === 'summer'){
    buget *= 0.3
    console.log(`Camp - ${buget.toFixed(2)}`);
}else if(season === 'winter'){
    buget *= 0.7
console.log(`Hotel - ${buget.toFixed(2)}`);
}
    }else if(buget <= 1000){
        console.log('Somewhere in Balkans');
        if(season === 'summer'){
            buget *= 0.4
            console.log(`Camp - ${buget.toFixed(2)}`);
        }else if(season === 'winter'){
            buget *= 0.8
        console.log(`Hotel - ${buget.toFixed(2)}`);
        }
    }else{
        console.log('Somewhere in Europe');
        buget *= 0.9
        console.log(`Hotel - ${buget.toFixed(2)}`);
    }
}journey(["312", "summer"])


// •	Първи ред – "Somewhere in [дестинация]" измежду "Bulgaria", "Balkans" и "Europe"
// •	Втори ред – "{Вид почивка} – {Похарчена сума}"
// o	Почивката може да е между "Camp" и "Hotel"
// o	Сумата трябва да е закръглена с точност до вторият знак след запетаята.


// •	При 100лв. или по-малко – някъде в България
// o	Лято – 30% от бюджета
// o	Зима – 70% от бюджета
// •	При 1000лв. или по малко – някъде на Балканите
// o	Лято – 40% от бюджета
// o	Зима – 80% от бюджета
// •	При повече от 1000лв. – някъде из Европа
// o	При пътуване из Европа, независимо от сезона ще похарчи 90% от бюджета.
