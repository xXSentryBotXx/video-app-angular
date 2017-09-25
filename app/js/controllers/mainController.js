(function () {
  App.controller('mainController', ['$scope', 'movieService', function ($scope, movieService) {

    function setActiveMovie (movie) {
      movieService.setActiveMovie(movie);
    }

    function init () {
      movieService
        .getMovies()
        .then(movies => {
          $scope.movies = movies;
        });

      $scope.setActiveMovie = setActiveMovie;
    }

    init();
  }]);
})();
