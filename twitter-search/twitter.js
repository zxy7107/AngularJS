angular.module('Twitter', ['ngResource']);

// function twitterSearch(result) {
// 	alert('this is ok');
// }

function TwitterCtrl($scope, $resource) {
	// $scope.twitter = $resource('https://api.twitter.com/1.1/search/:action',
	// 	{action:'tweets.json', q:'angularjs', callback:'twitterSearch'},
	// 	{get:{method:'JSONP'}});
	// $scope.twitter.get();
	

	$scope.twitter = $resource('http://api.twitter.com/1.1/search/:action',
		{action:'tweets.json', q:'angularjs', callback:'JSON_CALLBACK'},
		{get:{method:'JSONP'}});
	
	$scope.doSearch = function() {
		$scope.twitterResults = $scope.twitter.get({q:$scope.searchTerm});

	}
}