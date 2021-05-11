// Modules: encapsulate to reuse
angular.module('app')
.controller('TodoDetailsCtrl', function ($scope, TaskService, $routeParams) { // Controllers
    $scope.task = TaskService.get({id: $routeParams.id});
})
