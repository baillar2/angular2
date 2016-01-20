angular.module('madModule',[])

angular.module('madModule')
	.controller('killerController',['$scope', function($scope){

			$scope.switch1 = function(){

				$scope.displayInput1 = true
			}
			$scope.switch2 = function(){

				$scope.displayInput2 = true
			}
			$scope.switch3 = function(){

				$scope.displayInput3 = true
			}
			$scope.switch4 = function(){

				$scope.displayInput4 = true
			}
			$scope.switch5 = function(){

				$scope.displayInput5 = true
			}

			$scope.blur1 = function() {
				
				$scope.displayInput1 = false
			}				
			$scope.blur2 = function() {
				
				$scope.displayInput2 = false
			}
			$scope.blur3 = function() {
				
				$scope.displayInput3 = false
			}
			$scope.blur4 = function() {
				
				$scope.displayInput4 = false
			}			
			$scope.blur5 = function() {
				
				$scope.displayInput5 = false
			}
		

	}])