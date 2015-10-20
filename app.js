var app = angular.module('coderMdb', ['ngRoute']);

// Router:
app.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'templates/movieList.html',
      controller: 'MovieListCtrl as ctrl'
    })
    .when('/movie/:movieID', {
      templateUrl: 'templates/movieDetails.html',
      controller: 'movieDetailsCtrl as ctrl'
    })
    .otherwise({
      redirectTo: '/home'
    });
});
