angular.module('app', [])
	.controller('MainController', function($scope, Chuck){
	  // angular.extend($scope);
		$scope.getChuck = function() {
			Chuck.getData()
			  .then(function(data){
			  	$scope.chuck = data.value;
			  })
			  .catch(function(err){
			  	console.error(err);
			  });
		};
	})
	.factory('Chuck', function($http){
		var jokes = [];
	    var getData = function() {
			return $http({
				method: 'get',
				url: 'https://api.chucknorris.io/jokes/random'
			})
			.then(function(resp){
				jokes.push(resp.data.value);
				return resp.data;
			})
		};
		var getJoke = function(){
			jokes.push(getData.value);	
		};


		return {
			jokes: jokes,
			getData: getData,
			getJoke: getJoke
		};
	})








