'use strict';

/* Controllers */

var projectsControllers = angular.module('projectsControllers', []);

projectsControllers.controller('ProjectsCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.orderProp = 'date';

    $http.get('projects.json').success(function(data) {
        $scope.projects = data;
    });

    $scope.getTimelineColorClass = function (currentIndex) {

        var numberReduce = function(number) {

            var numberMaxItems = 6;

            return number >= numberMaxItems ? numberReduce(number - numberMaxItems) : number;
        };

        switch(numberReduce(currentIndex)) {
            case 0:
                return 'bgcolor-red';
            case 1:
                return 'bgcolor-orange';
            case 2:
                return 'bgcolor-yellow';
            case 3:
                return 'bgcolor-green';
            case 4:
                return 'bgcolor-blue';
            case 5:
                return 'bgcolor-darkblue';
        }
    };
}]);