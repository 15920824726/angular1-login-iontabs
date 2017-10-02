/**
 * Created by Administrator on 2017/9/20 0020.
 */
    'use strict';

    /*
     ** module is created.
     */
    var moduleName = 'userInfo';

    angular.module(moduleName,[])
        .config(['$stateProvider',
            function ($stateProvider) {
                $stateProvider
                    .state('login', {
                        url: '/login',
                        cache: false,
                        templateUrl: 'login/login.html',
                        controller: 'loginCtrl'
                    });
            }
        ]);



