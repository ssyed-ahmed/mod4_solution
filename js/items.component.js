(function() {
  'use strict';

  angular.module('MenuApp')
    .component('itemsList', {
      templateUrl: 'items.template.html',
      bindings: {
        items: '<'
      }
    });
})();
