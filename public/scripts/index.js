// Modules: encapsulate to reuse
angular.module('app', ['ngRoute', 'ngResource'])
.factory('resource', resource) // Resources
.factory('TaskService', TaskService) // Services
//---------------
// Routes
//---------------
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/todos.html',
        controller: 'TodoController'
    })
    .when('/:id', {
        templateUrl: 'views/todoDetails.html',
        controller: 'TodoDetailsCtrl'
    });
}]);