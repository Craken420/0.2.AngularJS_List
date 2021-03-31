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
            item._id = _items.length + 1;
            _items.push(item);
            return _items;
        },
        edit: function (item) {
            for (i in _items) {
                if (_items[i]._id == item._id)
                    _items[i] = item;
            }
            return _items;
        },
        delete: function(id) {
            for (i in _items) {
                if (_items[i]._id == id) {
                    _items.splice(i, 1);
                    return true;
                }
            }
            return false;
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
        } else {
            TaskService.edit($scope.newTask);
        }
        $scope.newTask = {};
    }
    $scope.edit = function(id) {
        for (i in $scope.tasks) {
            if ($scope.tasks[i]._id == id) {
                $scope.newTask = angular.copy($scope.tasks[i]);
                return true;
            }
        }
        return false;
    }
    $scope.delete = function(id) {
        if ( TaskService.delete(id) ) {
            $scope.newTask = {};
            $scope.init();
        }
    }
    $scope.init = function() {
        $scope.tasks = TaskService.getListItems();
    }
    $scope.init();
})
.controller('TodoDetailsCtrl',
    function ($scope, $routeParams, TaskService) {
        $scope.task = TaskService.getListItems()[$routeParams.id];
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