(function() {
  'use strict';

  angular.module('MenuApp')
    .component('categoriesList', {
      templateUrl: 'categories.template.html',
      bindings: {
        categories: '<'
      }
    });
})();
