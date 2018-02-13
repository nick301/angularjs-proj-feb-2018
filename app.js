var myapp = angular.module('myapp',[]);

//Creating a new controller under MyApp module.
myapp.controller('MyCtrl',['$scope',function($scope){    
    $scope.myval = "Hello World.";
    //ng-model helps in establishing 2-way binding.
    
    //Button On Click Event.    
    $scope.OnClick = function(){
        //alert("Clicked");
        $scope.myval = "Some New Value";
    };
}]);