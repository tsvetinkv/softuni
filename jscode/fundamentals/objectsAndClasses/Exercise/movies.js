// Write a function that stores information about movies inside an array.
// The movie's object info must be name, director, and date. You can receive several types of input:
// · "addMovie {movie name}" – add the movie
// · "{movie name} directedBy {director}" – check if the movie exists and then add the director
// · "{movie name} onDate {date}" – check if the movie exists and then add the date
// At the end print all the movies that have all the info
//  (if the movie has no director, name, or date, don’t print it) in JSON format.
function movies(array){

    let movies = [];
    for (const el of array) {
 let line = el.split(" ");
 
 if (line.includes("addMovie")) {
   let name = el.replace("addMovie", '')
   movies.push({name:name})
   
 }else if (line.includes("directedBy")){
  let nameAndDirector = line
   nameAndDirector = nameAndDirector.split(" ");
   console.log(nameAndDirector);
   for (let word in nameAndDirector){

   }
   let name = nameAndDirector[0]
   console.log(director);
// if (movies.hasOwnProperty(movieName)) {
//    // let director = 
//    // movies.director = 
// }
 }
    }
    //console.log(movies);
}movies(['addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford',
    'Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen']);