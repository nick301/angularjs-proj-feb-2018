//CUSTOM ANGULAR JS FILTERS.
//Filters must accept atleast one argument.
//Filters are a return function and should always return some value.

var myapp = angular.module('myapp');

myapp.filter('myCustomFilter',[function(){
    
    return function(value, length){
        return value.substr(0,length-2).toUpperCase();
    };
}]);