(function () {
  window.App = angular.module('video-app', ['ui.router']);

  App.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider) {

    $stateProvider
      .state('main',
        {
          name: 'main',
          url: '/main',
          templateUrl: 'views/main.html',
          controller: 'mainController'
        }
      )
      .state('details',
        {
          name: 'video-details',
          url: '/details',
          templateUrl: 'views/movie-details.html',
          controller: 'detailsController'
        }
      )
      .state('player',
        {
          name: 'video-player',
          url: '/player',
          templateUrl: 'views/movie-player.html',
          controller: 'playerController'
        }
      )
      .state('history',
        {
          name: 'history',
          url: '/history',
          templateUrl: 'views/history.html',
          controller: 'historyController'
        }
      )
      .state('about',
        {
          name: 'about',
          url: '/about',
          templateUrl: 'views/about.html',
          controller: 'aboutController'
        }
      );

    $urlRouterProvider.otherwise( function($injector, $location) {
      var $state = $injector.get('$state');
      $state.go('main');
    });
  }]);
})();
