(function () {
  window.App = angular.module('video-app', ['ui.router']);

  App.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise( function($injector, $location) {
      var $state = $injector.get('$state');
      //var user = $injector.get('user');

      $state.go('main');
    });

    $stateProvider
      .state(
        {
          name: 'main',
          url: '/main',
          templateUrl: 'views/main.html',
          controller: 'mainController'
        }
      )
      .state(
        {
          name: 'video-details',
          url: '/details',
          templateUrl: 'views/movie-details.html'
        }
      )
      .state(
        {
          name: 'video-player',
          url: '/player',
          templateUrl: 'views/movie-player.html'
        }
      );
  }]);
})();
