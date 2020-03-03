myApp.controller("divController", ["$scope", "$rootScope", function($scope, $rootScope) {
    $scope.div = function() {
        $rootScope.message = "Division: ";
        $rootScope.result = $rootScope.numberA / $rootScope.numberB;
    };
  }
]);