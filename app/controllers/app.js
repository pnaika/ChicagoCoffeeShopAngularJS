/**
 * Created by Prashanth on 5/14/2015.
 */

(function(){

    angular.module('myApp',['ngRoute']).config(moduleConfig);

    function moduleConfig($routeProvider) {
        $routeProvider
            .when('/aboutUs', {
                templateUrl: 'views/aboutUs/aboutUs.html',
                controller: 'abs'
            })
            .when('/contactUs', {
                templateUrl: 'views/contactUs/contactUs.html',
                controller: 'cs'
            })
            .when('/ps', {
                templateUrl: 'views/ProductnService/ps.html',
                controller: 'ps'
            })
            .when('/signUp', {
                templateUrl: 'views/signUp.html',
                controller: 'fcrtl'
            })
            .when('/cart', {
                templateUrl: 'views/cart.html'
            })
            .otherwise({
                redirectTo: '/aboutUs'
            });
    }
})();
