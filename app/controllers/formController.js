/**
 * Created by Prashanth on 5/12/2015.
 */

(function(){
    angular.module('myApp',['ngMessages']).controller('fcrtl',FormController);

    //angular.module('myApp').controller('fcrtl',FormController);

    function FormController(){
        var fc = this;
        fc.name="AngularJS";
        //console.log('form Controller');
    }
})();
