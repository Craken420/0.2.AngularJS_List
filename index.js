
// Modules: encapsulate to reuse
angular.module('app', ['ngRoute'])
.value('Tasks', [
    {_id: 1, title: 'Master HTML/CSS/Javascript', completed: true},
    {_id: 2, title: 'Learn AngularJS', completed: true },
    {_id: 3, title: 'Get started with ExpressJS', completed: false },
    {_id: 4, title: 'Setup MongoDB database', completed: false},
    {_id: 5, title: 'Be awesome!', completed: false}
])
//---------------
// Services
//---------------
.factory('TaskService', function(Tasks) {
    var _items = Tasks
    return {
        setListItems: function(items) {
            _items = items;
            return this;
        },
        getListItems: function() {
            return _items;
        }
    }
})
//---------------
// Controllers
//---------------
.controller('TodoController', function ($scope, TaskService) {
    $scope.students = [];
    var empid = 1;
    $scope.todos = TaskService.getListItems();
})
.controller('TodoDetailsCtrl', ['$scope', '$routeParams', 'TaskService',
    function ($scope, $routeParams, TaskService) {
        $scope.todo = TaskService.getListItems()[$routeParams.id];
    }
])
//---------------
// Routes
//---------------
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: '/todos.html',
        controller: 'TodoController'
    })
    .when('/:id', {
        templateUrl: '/todoDetails.html',
        controller: 'TodoDetailsCtrl'
    });
}]);