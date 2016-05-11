scApp.controller('MainController', ['$scope', '$location', '$anchorScroll', '$timeout', function($scope, $location, $anchorScroll, $timeout) {

	$scope.mainDisplayData = {
		showTopLevelContent : true,
		showScorecard : true
	};
	
	$scope.mainDebug = {
		inDebugMode: false,
		useLocalTestDataForServices: false
	};
	
    $scope.jumpToElementViaId = function(elementId, weWait, timeToWaitInMiliseconds) {
	    if (weWait) {
	      //this forces the jump in cases such as an outward collapse - 
	      //where the location does not yet exist until it is fully expanded
	      $timeout(function() {
	        console.log("waited " + timeToWaitInMiliseconds);
	        $location.hash(elementId);
	      }, timeToWaitInMiliseconds);
	    }
	    //set the location of the element via id to scroll to
	    $location.hash(elementId);
	    //scroll there
	    $anchorScroll();
    };	

}]);