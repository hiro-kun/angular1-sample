angular
.module('hogeModule', [])
.service('hogeService', function() {
    this.method = function() {
        return 'hoge service';
    };
});

angular
.module('hageModule', [])
.service('hageService', function() {
    this.method = function() {
        return 'hage service';
    };
});

angular
.module('myModule', ['hogeModule', 'hageModule'])
.run(function($rootScope, hogeService, hageService) {
    $rootScope.message = hogeService.method();
    $rootScope.message = hageService.method();
});
