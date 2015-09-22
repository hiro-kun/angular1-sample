myApp.factory('youTubeMovieSearchService', ['$resource', 'API-KEY', function($resource, apikey) {

 var base     = 'https://www.googleapis.com/youtube/v3/search?part=snippet';
 var key      = '&key=' + apikey.youtube;
 var callback = '&callback=JSON_CALLBACK';

　return $resource(base + key + '&q=' + ':q' + callback,
    { q: '@q'},
    { get: { method: 'JSONP'} }
　);
}]);

myApp.factory('ZipcodeSearchService', ['$resource', function($resource) {

  return $resource('http://zipcloud.ibsnet.co.jp/api/search?zipcode=:zipcode',
	  { zipcode: '@zipcode', callback: 'JSON_CALLBACK'},
		{ get: { method: 'JSONP'}
	});
}]);
