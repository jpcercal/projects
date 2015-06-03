'use strict';

/* Controllers */

var projectsControllers = angular.module('projectsControllers', []);

projectsControllers.controller('ProjectsCtrl', ['$scope', '$http',
    function($scope, $http) {
        $http.get('projects.json').success(function(data) {
            $scope.projects = data;
        });

        $scope.orderProp = 'date';
    }]);