// Modules: encapsulate to reuse
angular.module('app', ['ngRoute'])
//---------------
// Routes
//---------------
.config(function ($routeProvider, $locationProvider ) {
    // $locationProvider.html5Mode(true);
    $routeProvider
    .when('/', {
        templateUrl: 'todos',
        controller: 'TodoController'
    })
    .when('/:id', {
        templateUrl: 'todoDetails',
        controller: 'TodoDetailsCtrl'
    })
    .otherwise({redirectTo:'/'});
});