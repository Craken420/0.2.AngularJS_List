// Modules: encapsulate to reuse
angular.module('app')
.controller('TodoController', function ($scope, TaskService) { // Controllers
    $scope.tasks = [];
    $scope.changeComplete = function (id) {
        $scope.edit(id);
        $scope.newTask.completed = !$scope.newTask.completed;
        $scope.save();
    }
    $scope.save = function () {
        if(!$scope.newTask || $scope.newTask.length < 1) return;

        var todo = new TaskService($scope.newTask);
        todo.$save();
        $scope.newTask = {};
        $scope.init();
    }
    $scope.edit = function(id) {
        for (i in $scope.tasks) {
            if ($scope.tasks[i]._id == id) {
                $scope.newTask = angular.copy($scope.tasks[i]);
            }
        }
    }
    $scope.delete = function(id) {
        TaskService.delete({id: id});
        $scope.init();
    }
    $scope.init = function() {
        $scope.tasks = TaskService.query();
    }
    $scope.init();
})
