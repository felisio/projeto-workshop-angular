'use strict';

angular.module('myApp.agenda', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/agenda', {
    templateUrl: 'agenda/agenda.html',
    controller: 'AgendaCtrl',
    controllerAs:'ctrl'
  });
}])

.controller('AgendaCtrl', ['$scope',function($scope) {
	
	$scope.title = 'Agenda Angulars';

	this.pessoa = {name:'John', phone:'555-1276'};

	$scope.objs = [
        {name:'John', phone:'555-1276'},
        {name:'Maria', phone:'800-255-255'},
        {name:'Mike', phone:'555-4321'}
      ];

}]);