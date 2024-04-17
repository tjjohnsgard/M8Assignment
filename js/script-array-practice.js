//STEP 1: Create array of five favorite movies, use console to display second

const favMovies = [
  "Star Wars: A New Hope",
  "Die Hard",
  "Christmas Vacation",
  "Transformers",
  "The Hunt for Red October"
];

console.log("2nd fave movie: " + favMovies[1]);

//STEP 2: Array 'movies' use fx constructor; Add len of 5 to constructor...

let movies = new Array(5);

movies[0] = "Star Wars: A New Hope";
movies[1] = "Die Hard";
movies[2] = "Christmas Vacation";
movies[3] = "Transformers";
movies[4] = "The Hunt for Red October";

console.log("1st fave movie: " + movies[0]);

//STEP 3: Add new movie to 3rd position; Use console display len of array; Should have 6 movies

let movies = new Array(5);

movies[0] = "Star Wars: A New Hope";
movies[1] = "Die Hard";
movies[2] = "Christmas Vacation";
movies[3] = "Transformers";
movies[4] = "The Hunt for Red October";

movies.splice(2, 0, "The Gauntlet");

console.log("Array length: " + movies.length);

//STEP 4: Array 'movies' use literal notation; Assign fave movie to ea index in array til have 5; Use delete oper to remove 1st

let movies = [
  "Star Wars: A New Hope",
  "Die Hard",
  "Christmas Vacation",
  "Transformers",
  "The Hunt for Red October"
];

delete movies[0];

console.log("Movies after delete 1st: ");
console.log(movies);

//STEP 5: Literal notation; assign fave movies to each index in array til have 7; Use for/in loop iterate thru array & display

let movies = [
  "Star Wars: A New Hope",
  "Die Hard",
  "Christmas Vacation",
  "Transformers",
  "The Hunt for Red October",
  "The Gauntlet",
  "Die Another Day"
];

console.log("Array movies: ");

for (let index in movies) {
  console.log(movies[index]);
}

//STEP 6: Step 5 + Use for/of loop to iterate thru array and display each movie in console

let movies = [
  "Star Wars: A New Hope",
  "Die Hard",
  "Christmas Vacation",
  "Transformers",
  "The Hunt for Red October",
  "The Gauntlet",
  "Die Another Day"
];

console.log("Array movies: ");

for (let movie of movies) {
  console.log(movie);
}

//STEP 7: Step 5 + Use for/of loop to iterate thru array, display each movie within the console window in a sorted view

let movies = [
  "Star Wars: A New Hope",
  "Die Hard",
  "Christmas Vacation",
  "Transformers",
  "The Hunt for Red October",
  "The Gauntlet",
  "Die Another Day"
];

movies.sort();

console.log("Sorted movies array: ");

for (let movie of movies) {
  console.log(movie);
}

//STEP 8: Step 5 + Existing array, create array 'leastFavMovies'; Populate array with 3 movies you regret watching

let movies = [
  "Star Wars: A New Hope",
  "Die Hard",
  "Christmas Vacation",
  "Transformers",
  "The Hunt for Red October",
  "The Gauntlet",
  "Die Another Day"
];

console.log("Movies I like: ");

for (let movie of movies) {
  console.log(movie);
}

let leastFaveMovies = [
  "Wizard of Oz",
  "Wonka",
  "Airplane"
];

console.log("\nMovies I regret watching: ");

for (let movie of leastFaveMovies) {
  console.log(movie);
}

//STEP 9: Step 8 + Use concat() merge 2 arrays together to single array 'movies'; Display the list in reverse sorted order

let movies = [
  "Star Wars: A New Hope",
  "Die Hard",
  "Christmas Vacation",
  "Transformers",
  "The Hunt for Red October",
  "The Gauntlet",
  "Die Another Day"
];

let leastFaveMovies = [
  "Wizard of Oz",
  "Wonka",
  "Airplane"
];

movies = movies.concat(leastFaveMovies);

movies.sort().reverse();

console.log("Reverse merged list: ");

for (let movie of movies) {
  console.log(movie);
}

//STEP 10: Step 9 + Use an array function to return just the last item in the array and display it within the console window

let movies = [
  "Star Wars: A New Hope",
  "Die Hard",
  "Christmas Vacation",
  "Transformers",
  "The Hunt for Red October",
  "The Gauntlet",
  "Die Another Day"
];

let leastFaveMovies = [
  "Wizard of Oz",
  "Wonka",
  "Airplane"
];

movies = movies.concat(leastFaveMovies);

movies.sort().reverse();

const lastMovie = movies[movies.length - 1];

console.log("Last array item: ");
console.log(lastMovie);

//STEP 11: Step 10 + Remove prev method, use method to return first item in  array and display it within the console window

let movies = [
  "Star Wars: A New Hope",
  "Die Hard",
  "Christmas Vacation",
  "Transformers",
  "The Hunt for Red October",
  "The Gauntlet",
  "Die Another Day"
];

let leastFaveMovies = [
  "Wizard of Oz",
  "Wonka",
  "Airplane"
];

movies = movies.concat(leastFaveMovies);

movies.sort().reverse();

const firstMovie = movies.shift();

console.log("1st array item: ");
console.log(firstMovie);

//STEP 12: Retrieve movies in array you do not like and return their indices; Use indices, add movies like

let movies = [
  "Star Wars: A New Hope",
  "Die Hard",
  "Christmas Vacation",
  "Transformers",
  "The Hunt for Red October",
  "The Gauntlet",
  "Die Another Day"
];

let leastFaveMovies = [
  "Wizard of Oz",
  "Wonka",
  "Airplane"
];

let indicesOfLeastFaveMovies = [];

for (let i = 0; i < movies.length; i++) {
  if (leastFaveMovies.includes(movies[i])) {
      indicesOfLeastFaveMovies.push(i);
  }
}

console.log("Indices of least fave movies: ");
console.log(indicesOfLeastFaveMovies);

let moviesILike = ["Evita", "Phantom of the Opera"];

for (let index of indicesOfLeastFaveMovies) {
  movies[index] = moviesILike.shift();
}

console.log("\nUpdated movies array: ");
console.log(movies);

//STEP 13: Create multi-dim array contains 5 fave movies & rank 1-5; Loop thru array & filter disp only names; Use filter()

let faveMoviesRank = [
  ["Star Wars: A New Hope", 1],
  ["Die Hard", 2],
  ["Christmas Vacation", 3],
  ["Transformers", 4],
  ["The Hunt for Red October", 5]
];

const movieNames = faveMoviesRank.filter(([movieName]) => movieName).map(movie => movie[0]);

console.log("Ranked fave movies: ");
console.log(movieNames);

//STEP 14: Create array 'employees' use literal notation & populate array w/employee names; Create anonymous fx 'showEmployee'

let employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];

let showEmployee = function(employeesArray) {

  console.log("Employees: ");

  for (let employee of employeesArray) {
      console.log(employee);
  }
};

showEmployee(employees);

//STEP 15: Fx to filter false, null, 0 and blank values from array

function filterVal(arr) {

  return arr.filter(value => value !== false && value !== null && value !== 0 && value !== '');
}

console.log(filterVal([58, '', 'xyz', true, null, false, 0]));

//STEP 16: Fx get random item from array; Create numeric array with 10, pass array to my fx, fx randomly return one number

function getRanArray(arr) {

  const ranIndex = Math.floor(Math.random() * arr.length);

  return arr[ranIndex];
}

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ranItem = getRanArray(numArray);

console.log("Random item: ", ranItem);

//STEP 17: Fx to get largest number from numeric array

function getLargeNum(arr) {

  return Math.max(...arr);
}

const numArray = [10, 5, 20, 15, 8];
const largeNum = getLargeNum(numArray);

console.log("Largest number: ", largeNum);