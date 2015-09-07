(function() {
    var myModule = angular.module('myModule', []);

    myModule.factory('sampleService', function() {
        return {
            method: function() {
                return 'sample service created by factory.'
            },
            hoge: function() {
                return 'this is hoge';
            }
        };
    });

    myModule.controller('SampleController', function($scope, sampleService) {
        $scope.message = sampleService.hoge();
        $scope.hoge    = sampleService.method();
    });
})();
