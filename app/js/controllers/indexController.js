(function () {
  App.controller('indexController', ['$scope', 'movieService', function ($scope, movieService) {
    let $doc = angular.element(document);

    function handler (e) {
        console.log(e.keyCode);
    }

    $doc.on('keydown', handler);

    $scope.$on('$destroy', function () {
      $doc.off('keydown', handler);
    });
  }]);
})();
