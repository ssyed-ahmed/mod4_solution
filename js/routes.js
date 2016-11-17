(function() {
  'use strict';

  angular.module('MenuApp')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.template.html'
      })

      .state('categories', {
        url: '/categories',
        templateUrl: 'categorieslist.template.html',
        controller: 'CategoriesController as categoryList',
        resolve: {
          categories: ['MenuDataService', '$q', function(MenuDataService, $q) {

              var t = MenuDataService.getAllCategories();
              return t;
          }]
        }
      })
  }
})();
