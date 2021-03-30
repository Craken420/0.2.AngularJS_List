// Modules: encapsulate to reuse
angular.module('app', ['ngRoute'])
.value('Tasks', [
    {_id: 1, title: 'Master HTML/CSS/Javascript', nota: 0, completed: true},
    {_id: 2, title: 'Learn AngularJS', nota: 0, completed: true },
    {_id: 3, title: 'Get started with ExpressJS', nota: 0, completed: false },
    {_id: 4, title: 'Setup MongoDB database', nota: 0, completed: false},
    {_id: 5, title: 'Be awesome!', nota: 0, completed: false}
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
        },
        create: function (item) {
            item.id = _items.length;
            _items.push(item);
            return _items;
        }
    }
})
//---------------
// Controllers
//---------------
.controller('TodoController', function ($scope, TaskService) {
    $scope.tasks = [];

    $scope.create = function(newTask) {
        $scope.tasks = TaskService.create(newTask);
    }
    $scope.save = function () {
        if ($scope.newTask._id == null) {
            $scope.create($scope.newTask)
        }
        $scope.newTask = {};
    }

    $scope.init = function() {
        $scope.todos = TaskService.getListItems();
        console.log('$scope.todos : ', $scope.todos )
    }
    $scope.init();
})
.controller('TodoDetailsCtrl',
    function ($scope, $routeParams, TaskService) {
        $scope.todo = TaskService.getListItems()[$routeParams.id];
    }
)
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