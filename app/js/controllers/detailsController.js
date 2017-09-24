(function () {
  App.controller('detailsController', ['$scope', 'movieService', function ($scope, movieService) {
    $scope.activeMovie = movieService.getActiveMovie();
  }]);
})();
