
    'use strict';

    angular.module('navmap',[])
        .config(['$stateProvider',
            function ($stateProvider) {
                $stateProvider
                    .state('map', {
                        url: '/map',
                        params:{'data':null},
                        templateUrl: 'navmap/navmap.html',
                        controller: 'mapCtrl'
                    });
            }
        ])
