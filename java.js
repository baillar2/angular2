angular.module('madModule',[])

angular.module('madModule')
	.controller('killerController',['$scope', function($scope){

		$scope.data = [' John Smith', 'johnsmit@whatever.com', 
		'November, 28 1990', 'Google', 'Enter Your Bio Here'] 

		$scope.flip = [false, false, false, false, false]
			
			$scope.click = function(n){
				console.log(n, 'click worked')
				$scope.flip[n] = true
			}
			
			
			$scope.blur = function(n) {	
				$scope.flip[n] = false
				
			}				
			
		
			$scope.submit = function() {
				$scope.data[0] = $scope.data[5]
				$scope.data[1] = $scope.data[6]
				$scope.data[2] = $scope.data[7]
				$scope.data[3] = $scope.data[8]
				$scope.data[4] = $scope.data[9]
			}

	}])