'use strict';

/* App Module */

var projectsApp = angular.module('projectsApp', [
    'ngRoute',
    'projectsControllers'
]);

projectsApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'partials/projects.html',
                controller: 'ProjectsCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);