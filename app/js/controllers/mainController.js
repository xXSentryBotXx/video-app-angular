(function () {
  App.controller('mainController', ['$scope', '$http', function ($scope, $http) {
    $scope.movies = [];

    function getMovies () {
      $http({
    		url: 'https://demo2697834.mockable.io/movies',
    		method: "GET"
    	}).then(function(response){
    		$scope.movies = response.data.entries;
    	}).then(function (response) {
        carouselPlugin($)
      }).catch(function(err){
    		console.log(err);
    	});
    }

    function init() {
      getMovies();
    }

    init();
  }]);
})();
