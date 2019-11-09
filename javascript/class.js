var movies = [
{
	name:"Baco to the future",
	rating:"3",
	hasWatched:true,
	minus : function(sub) {
		return this.rating - sub;
	}
},
{
	name:"Gladiator",
	rating:"5",
	hasWatched:true
},
{
	name:"Venom",
	rating:"1",
	hasWatched:false
}
];

function printMovie(movie) {
	var s = movie.hasWatched ? "You have watched" : "you have not seen";
	s = s + " \"" + movie.name + " \"- ";
	s = s + movie.rating + " stars";

	console.log(s);
}

movies.forEach(printMovie);
console.log(movies[0].minus(2));
