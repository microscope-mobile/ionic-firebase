'use strict';

/**
 * Router class
 */
function Router($stateProvider, $urlRouterProvider) {

  $stateProvider
  
  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'components/menu/controllers/menu.html',
    controller: 'MenuCtrl as vm'
  })
  
  .state('app.firebase', {
    url: '/firebase',
    views: {
      'menuContent': {
        templateUrl: 'components/firebase/controllers/list.html',
        controller: 'ListCtrl as vm'
      }
    }
  })
  
    .state('app.firebaseShow', {
    url: '/firebase/:id',
    views: {
      'menuContent': {
        templateUrl: 'components/firebase/controllers/show.html',
        controller: 'ShowCtrl as vm'
      }
    }
  })
  
  .state('app.about', {
    url: '/about',
      views: {
        'menuContent': {
          templateUrl: 'components/about/controllers/about.html',
          controller: 'AboutCtrl as vm'
      }
    }
  });
  
  $urlRouterProvider.otherwise("/app/firebase");
}

module.exports = Router;