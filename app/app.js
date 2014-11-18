'use strict';

// Declare aqui o nome da sua app principal seus modulos, dependencias e components
angular.module('myApp', [
  'ngRoute',
  'myApp.agenda'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/agenda'});
}]);
