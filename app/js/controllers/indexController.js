(function () {
  App.controller('indexController', ['$scope', 'movieService', function ($scope,movieService) {
    var handler = function(e){
        console.log(e.keyCode);
    };

    var $doc = angular.element(document);

    $doc.on('keydown', handler);
    $scope.$on('$destroy',function(){
      $doc.off('keydown', handler);
    })
  }]);
})();
