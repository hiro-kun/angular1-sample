myApp.controller('youTubeController', ['$rootScope', '$scope', 'youTubeMovieSearchService', '$location', function($rootScope, $scope, youTubeMovieSearchService, $location) {
 $scope.doSearch = function(){
   youTubeMovieSearchService.get({q:$scope.query}, function(response){
     $rootScope.youTubeSearchResults =　response;
     $location.path('/youtube/list/');
   });
 }
}]);

myApp.controller('youTubeListController', ['$rootScope', '$scope', function($rootScope, $scope) {
  $scope.youTubeSearchResults = $rootScope.youTubeSearchResults.items;
  delete $rootScope.youTubeSearchResults.items;
}]);

myApp.controller('zipCodeController', ['$scope', '$location', function($scope, $location) {
  $scope.searchZipcode = function() {
    $location.path('/zipcode/detail/' + $scope.zipcode);
  }
}]);

myApp.controller('zipCodeDetailController', ['$scope', '$location', '$routeParams', 'ZipcodeSearchService', function($scope, $location, $routeParams, ZipcodeSearchService) {
  ZipcodeSearchService.get({zipcode:$routeParams.zipcode}, function(response){
    $scope.result = response.results[0]['address1'] + response.results[0]['address2']+ response.results[0]['address3'];
  });
}]);
