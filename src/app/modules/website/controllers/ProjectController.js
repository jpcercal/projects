(function() {

    var website = angular.module("modules.website");

    website.controller('ProjectController', ['$scope', 'ProjectService', function($scope, ProjectService) {

        ProjectService.getProjects().success(function (projects) {
            $scope.projects = projects;
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

})();
