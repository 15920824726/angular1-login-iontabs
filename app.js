/**
 * Created by Administrator on 2017/9/20 0020.
 */
(function () {
    'ues strict';

    var app= angular.module('App',['ionic','userInfo','contacts','desktop']);
    app.config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            //tab position in ios android
            $urlRouterProvider.otherwise('/login');
        }])
})()



