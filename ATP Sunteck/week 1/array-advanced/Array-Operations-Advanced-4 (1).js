//ASSIGNMENT 4: 
//------------
//Movie Streaming Platform

//You are working on a movie recommendation system.

//Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


//Tasks:
    //1. filter() only "Sci-Fi" movies
let result1 = movies.filter(movie=>movie.genre == "Sci-Fi")
console.log(result1)
    //2. map() to return:
let result2 = movies.map(m => m.title + " (" + m.rating + ")")[0]
            //"Inception (8.8)"
console.log(result2)
    //3. reduce() to find average movie rating
let result3 = movies.reduce((acc, r)=> acc + r.rating / movies.length, 0)
console.log(result3)
    //4. find() movie "Joker"
let result4 = movies.find(movie=>movie.title=== "Joker")
console.log(result4)
    //5. findIndex() of "Avengers"
let result5 =  movies.findIndex(movie=>movie.title === "Avengers")
console.log(result5)