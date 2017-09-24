(function () {
  App.controller('historyController', ['$scope', 'movieService', function ($scope, movieService) {
    $scope.moviesHistory = [];

    function getMoviesHistory () {
      $scope.moviesHistory = movieService.getMoviesHistory()
    }

    function init () {
      getMoviesHistory();
    }

    init();
  }]);
})();
