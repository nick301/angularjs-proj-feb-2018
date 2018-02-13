var myapp = angular.module('myapp'); //Gets the Module named myapp.

//Creating a new service named as AppService
myapp.service('AppService',['$http', function($http){

//To make the a variable PUBLIC, we need to write the below code, since by default all variables in a service is PRIVATE.
this.getStudents = function(){
    //Getting the data from student.json file asyncronously.
    return $http.get('/student.json');
    //return students;
}

}]);