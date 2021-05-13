// Modules: encapsulate to reuse
angular.module('app')
.controller('TodoController', function ($scope, $http) { // Controllers
    $scope.serv = 'http://localhost:3003';
    $scope.tasks = [];
    $scope.clean = function() {
        $scope.newTask = {}
    }
    $scope.changeComplete = function (id) {
        $scope.edit(id);
        $scope.newTask.completed = !$scope.newTask.completed;
        $scope.save();
    }
    $scope.save = function () {
        if(!$scope.newTask || $scope.newTask.length < 1) return;
        $http({
            method: 'POST',
            url: $scope.serv + '/todos',
            params: { newTask: $scope.newTask }
         }).
         success( function(data) {
            if(typeof(data) == 'object'){
               $scope.newTask = {};
               $scope.init();
            } else
               alert('Save error.');
         }).
         error( () => alert('Save error.') );
    }
    $scope.edit = function(id) {
        for (i in $scope.tasks) {
            if ($scope.tasks[i]._id == id) {
                $scope.newTask = angular.copy($scope.tasks[i]);
            }
        }
    }
    $scope.delete = function(id) {
        $http({
            method: 'DELETE',
            url: $scope.serv + '/todos/:id',
            params: {
               id: id
            }
         }).
         success(function(data) {
            if(data)
               $scope.init();
            else
               alert('Error while deleting.');
         }).
         error( () => alert('Error while deleting.'));
    }
    $scope.init = function() {
        $http({
            method: 'GET', url: $scope.serv + '/todos'
         })
        .success(function(data) {
            if(typeof(data) == 'object')
                $scope.tasks = data;
            else
               alert('Error');
        })
        .error( () => alert('Error') );
        
    }
    $scope.init();
})
