function movies(array) {
  let movies = [];
  for (const el of array) {
    let line = el.split(" ");

    if (line.includes("addMovie")) {
      let name = el.replace("addMovie ", "");
      movies.push({ name: name });
    } else if (line.includes("directedBy")) {
      // console.log(line);
      let split = el.split(" directedBy ");
      let [movieName, director] = split;
      // console.log(director);
      movies.forEach((movie) => {
        if (movie.name == movieName) {
          movie.director = director;
        }
      });
    } else if (line.includes("onDate")) {
      let [movieName, date] = el.split(" onDate ");

      movies.forEach((movie) => {
        if (movie.name == movieName) {
          movie.date = date;
        }
      });
    }
  }
  for (const element of movies) {
    if (element.name && element.date && element.director) {
      console.log(JSON.stringify(element));
    }
  }
}
movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford",
  "Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
