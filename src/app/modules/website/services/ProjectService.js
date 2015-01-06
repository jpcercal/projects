(function() {

    var website = angular.module("modules.website");

    website.factory('ProjectService', ['$http', function($http) {
        return {
            getProjects: function () {
                return $http.get('projects.json');
            }
        };
    }]);

})();
