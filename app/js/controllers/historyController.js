(function () {
  App.controller('historyController', ['$scope', 'movieService', function ($scope, movieService) {
    $scope.setActiveMovie = setActiveMovie;

    $scope.moviesHistory = [];

    function getMoviesHistory () {
      $scope.moviesHistory = movieService.getMoviesHistory();
    }

    function setActiveMovie (movie) {
      movieService.setActiveMovie(movie);
    }

    function init () {
      getMoviesHistory();
    }

    init();
  }]);
})();
