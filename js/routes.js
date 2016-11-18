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
          categories: ['MenuDataService', function(MenuDataService) {

              return MenuDataService.getAllCategories();
          }]
        }
      })

      .state('items', {
          url: '/items/{categoryShortName}',
          templateUrl: 'itemslist.template.html',
          controller: 'ItemsController as itemList',
          resolve: {
            items: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams) {
                return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
            }]
          }
      })
  }
})();
