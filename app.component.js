/*
Anjular JS Component.
Name of the component should be camelcase. 
While using the component in the html page, 
the capital letter will be replaced by hypen and small letter. 
Eg. studentDetails becomes student-details.
DOM manipulation is not recommended in the Controllers or Modules.
Bindings helps in making a component reusable.
*/
var myapp = angular.module('myapp');

myapp.controller('StudentDetailCtrl', [function(){                
    this.myname = 'Custom Component';
}]);

myapp.component('studentDetails', {
    templateUrl: 'student-details.tpl.html',
    bindings: {
        myTitle: '@', //@ means a string value is being expected.
        myList: '<', //< means a 'property' is being expected.
        currentStudent: '<'
    },
    controllerAs : 'vm', //Setting alias name for controller object. If no alias, the we need to use $ctrl.
    controller: 'StudentDetailCtrl'
});

myapp.component('homeComponent',{
    template : '<div>This is a home page component.</div>'
});

myapp.component('aboutComponent',{
    template : '<div>This is a about page component.</div>'
});