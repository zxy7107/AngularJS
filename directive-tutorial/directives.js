angular.module('components', [])
	.directive('helloWorld', function() {
		return {
			restrict: 'E',
			scope: {
				name: 'bind'
			},
			// template: '<span>Hello world</span>'
			templateUrl: 'partials/hello.html'
		}
	})

angular.module('HelloApp', ['components'])