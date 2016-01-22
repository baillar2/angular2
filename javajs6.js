angular.module('moduleOne',[])

angular.module('moduleOne')
	.controller('controllerOne', ['$scope', function($scope){
		$scope.hide = true
		$scope.data = ['Tom "THE GRINDER" Lovett', '50 Shades of Coding and anything by Nicholas Sparks',
		'I love the angular library but could not find the front door', 
		'I spent 3 years in a Village People Cover band, and then as a "lotion holder" for parapalegic masseuse. \
		Tom refers to himself in the third person when cute girls are near by because Tom is the coolest guy \
		 Tom knows.']
		
		 $scope.users = []
		 $scope.profile = {name:'', books:'', library:'', bio:''}
		$scope.formOpen = function() {
			$scope.show = true
			$scope.hide = false
		}
		$scope.formClose = function() {
			$scope.show = false
			$scope.hide = true
		}
		$scope.submit = function() {
			console.log($scope.users)
			console.log($scope.users)
			$scope.users.push($scope.profile)
			console.log($scope.users)
			console.log($scope.profile)
			for ( i=0 ; i<$scope.users.length ; i++){
			$scope.data[0] = $scope.users[i].name
			$scope.data[1] = $scope.users[i].books	
			$scope.data[2] = $scope.users[i].library
			$scope.data[3] = $scope.users[i].bio
			}
		}

	}])