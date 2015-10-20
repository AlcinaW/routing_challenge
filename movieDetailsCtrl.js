app.controller('movieDetailsCtrl', MovieDetailsCtrl);

function MovieDetailsCtrl(movieService, $routeParams) {
  /*TODO #4: Load the movie from the movieService using the id form the route params*/
  	this.movieID=$routeParams.movieID;
  	this.movie=movieService.getMovie(this.movieID);
  	console.log(this.movie);
}
