angular.module('starter', ['ionic', 'starter.controllers', 'starter.directives', 'mapnet.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}).config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })

      .state('app.search', {
        url: '/search',
        views: {
          'menuContent': {
            templateUrl: 'templates/map.html',
            controller: 'MapCtrl'
          }
        }
      })

      .state('app.review', {
        url: '/review',
        views: {
          'menuContent': {
            templateUrl: 'templates/review.html',
            controller: 'AppCtrl'
          }
        }
      })

      .state('app.browse', {
        url: '/browse',
        views: {
          'menuContent': {
            'templateUrl': 'templates/browse.html'
          }
        }
      })
      .state('app.playlists', {
        url: '/playlists',
        views: {
          'menuContent': {
            templateUrl: 'templates/playlists.html',
            controller: 'PlaylistsCtrl'
          }
        }
      })

      .state('app.payments', {
        url: '/payments',
        views: {
          'menuContent':{
            templateUrl: 'templates/payments.html'
          }
        }
      })

      .state('app.single', {
        url: '/playlists/:playlistId',
        views: {
          'menuContent': {
            templateUrl: 'templates/playlist.html',
            controller: 'PlaylistCtrl'
          }
        }
      })

      .state('app.mapview', {
        url: '/mapview',
        views: {
          'menuContent': {
            templateUrl: 'map/mapview.html',
            controller: 'MapCtrl'
          }
        }
      })

      .state('app.current', {
        url: '/current',
        views: {
          'menuContent': {
            templateUrl: 'templates/currentScreen.html',
            controller: 'MapCtrl'
          }
        }
      })

      .state('app.share', {
        url: '/share',
        views: {
          'menuContent': {
            templateUrl: 'templates/share.html'
          }
        }
      });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/search');
});
