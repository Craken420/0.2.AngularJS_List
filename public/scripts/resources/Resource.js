//---------------
// Resources
//---------------
var resource = function ($resource) {
    var resource = {};
    resource.create = (url) => createResource($resource, url);
    return resource;
};

var createResource = function($resource, url) {
    var resource = $resource(url, defaultParams, actions);
    resource.prototype.$save = function () {
        if (this._id)
            this.$update();
        else
            this.$create();
    }
    return resource;
};

var defaultParams = { id: '@_id' };

var actions = {
    'create': {method: 'POST'},
    'update': {method: 'PUT'}
};
angular.module('app', [])
.factory('resource', resource) // Resources