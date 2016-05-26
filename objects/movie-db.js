//Sample of movieDB
//Create an array of movie objects.
//Each movie should have a title, rating, and hasWatched properties
//Iterate through the array and them out

//Expected output

//You have watched "In Bruges" - 5 stars
//You have not seen "Frozen" - 4.5 stars
//You have seen "Mad Max Fury Road" - 5 stars
//You have not seen "Les Miserables" - 3.5 stars

//Initializing movies
var movies = [
  {	
  	title: "In Bruges",
   	hasWatched: true,
   	rating: 5
  },
  {
   	title: "Frozen",
   	hasWatched: false,
   	rating: 4.5
  },
  {
  	title: "Max Fury Road",
   	hasWatched: true,
   	rating: 4.5
  },
  {
  	title: "Les Miserables",
   	hasWatched: false,
   	rating: 3.5
  }
];
//forEach
movies.forEach(function(movie){
  var result = "You have ";
  if(movie.hasWatch){
  result += "watched ";
  } else {
  result += "not seen ";
  result += "\"" + movie.title + "\" - ";
  result += movie.rating + " stars";
  console.log(result)
  }
});

//Refactor
function buildString(movie) {
var result = "You have ";
  if(movie.hasWatch){
  result += "watched ";
  } else {
  result += "not seen ";
  }
  result += "\"" + movie.title + "\" - ";
  result += movie.rating + " stars";
  return result;
};
//forEach
movies.forEach(function(movie){
	console.log(buildString(movie));
});



