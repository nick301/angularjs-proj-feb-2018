/*
CUSTOM ANGULAR JS SERVICES.
By default, all the variables inside a service is Private.
*/
var myapp = angular.module('myapp'); //Gets the Module named myapp.

//Creating a new service named as AppService
myapp.service('AppService',['$http','$q', function($http, $q){

//To make the a variable PUBLIC, we need to write the below code, since by default all variables in a service is PRIVATE.
this.getStudents = function(){
   
    var defer = $q.defer();    
    
    //Getting the data from student.json file asyncronously.
    $http.get('/student.json')
        .then(function(result){
            
            var students = result.data.map(function(item){
                item.seniority = item.age > 10 ? "senior" : "junior";
                return item;
            });
            defer.resolve(students);
        });

    return defer.promise;
}

}]);