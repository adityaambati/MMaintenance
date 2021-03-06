// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  // State the html pages for a particular controller
    .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })

  .state('signup', {
      url: '/signup',
      templateUrl: 'templates/SignUp.html',
      controller: 'SignUpCtrl'
  })

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',

  })



  .state('app.gohome', {
    url: '/gohome',
    views: {
      'menuContent': {
        templateUrl: 'templates/gohome.html',
        controller: 'gohomeCtrl'
      }
    }
  })

  .state('app.Home', {
    url: '/Home',
    views: {
      'menuContent': {
        templateUrl: 'templates/Home.html',
        controller: 'HomeCtrl'
      }
    }
});


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
