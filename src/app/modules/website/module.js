(function() {

    var website = angular.module("modules.website", [
        'ngRoute'
    ]);

    website.config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/website/partials/projects.tpl.html',
                controller:  'ProjectController'
            })
            .otherwise({
                redirectTo:  '/'
            })
        ;
    }]);

})();
