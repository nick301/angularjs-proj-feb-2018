//Angular JS Modules.
//Sets/Creates the Module named myapp.
//ng-app="myapp" - It means that myapp is going to be a parent module.
var myapp = angular.module('myapp',['ui.router']); 

/*
Config Phase:
In config phase, we can inject only Providers and Constants
$stateProvider to define the routes or states.
$urlRouterProvider has the responsibility to match the routes defined the list of the configurations.
 */
myapp.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider){
    
    //Route 1 / State Definition 1
    $stateProvider.state({
       name: 'home', //State Name.
       url: '/home',
       //template: '<div>This is a home page</div>' 
       component: 'homeComponent'
    });
    
    //Route 2 / State Definition 2
    $stateProvider.state({
        name: 'about', //State Name.
        url: '/about',
        //template: '<div>This is a about page</div>' 
        component: 'aboutComponent'
     });

     //If above routes are not matched, then show the 'home' url be default.
     $urlRouterProvider.otherwise('/home');
}]);

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