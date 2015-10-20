app.controller('MovieListCtrl', MovieListCtrl);

function MovieListCtrl(movieService, $location) {
  /*TODO #3: Load all of the movies from the movieService*/
  	this.location= $location;
  	this.movieService = movieService;
  	this.getMovies=movieService.getMovies();
  	console.log(this.getMovies);

  this.sortOptions = [
    {label: 'Title', sortField: 'Title', reverse: false},
    {label: 'Rating', sortField: "imdbRating", reverse: true}
  ]
  
  this.curPage = 0;
  this.moviesPerPage = 4;
}

MovieListCtrl.prototype.movieDetails =  function(id){
	this.location.path('/movie/' + id);
	console.log(id);
}

MovieListCtrl.prototype.getNumPages = function() {
  return Math.ceil(this.getMovies.length/this.moviesPerPage)
}