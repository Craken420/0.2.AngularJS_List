//---------------
// Services
//---------------
var TaskService = function (resource) {
    return resource.create('todos/:id');
};
angular.module('app')
.factory('TaskService', TaskService) // Services
