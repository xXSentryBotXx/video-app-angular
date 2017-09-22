(function () {
  App.controller('mainController', ['$scope', '$http', function ($scope, $http) {
    $scope.movies = [];
    $scope.keyDown = onKeyPressed;

    function getMovies () {
      $http({
    		url: 'https://demo2697834.mockable.io/movies',
    		method: "GET"
    	}).then(function(response){
    		$scope.movies = response.data.entries;
    	}).catch(function(err){
    		console.log(err);
    	});
    }

    function onKeyPressed(evt) {
      console.log(evt);
    }

    function init() {
      getMovies();
    }

    init();
  }]);
})();
