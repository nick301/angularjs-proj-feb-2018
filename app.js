//Angular JS Modules.
var myapp = angular.module('myapp',[]); //Sets the Module named myapp.

//Creating a new controller under MyApp module.
myapp.controller('MyCtrl',['$scope','AppService',function($scope, AppService){    
    
    //Consuming a service.
     AppService.getStudents()
     .then(function(result){
        $scope.students = result;
     }, function(){
        console.log('Err');
     })    

    //Define the onClick event of the button
    $scope.onClick = function(stud){
        //assign the selected student to an object named selectedStudent.
        $scope.selectedStudent = stud; 
    }
}]);