// Modules: encapsulate to reuse
angular.module('app')
.controller('TodoDetailsCtrl', function ($scope, $http, $routeParams) { // Controllers
    $http({
        method: 'GET',
        url: '/todos/:id',
        params: {
           id: $routeParams.id
        }
     }).
     success(function(data) {
        if(data)
            $scope.task = data;
        else
           alert('Error while getting.');
     }).
     error( () => alert('Error while getting.'));
})
